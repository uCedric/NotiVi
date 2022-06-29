#from crypt import methods
import os
from pickle import TRUE
from urllib import response
import pyrebase
from flask import Flask, redirect, render_template, url_for, request, session, jsonify , Response
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from sys import exit as sys_exit

#from requests import request, session




config={
    'apiKey': "AIzaSyAMhO6obi2vNuSAdwMl73o9AOFcdkFDR7Y",
    'authDomain': "project-bc30f.firebaseapp.com",
    'projectId': "project-bc30f",
    'storageBucket': "project-bc30f.appspot.com",
    'messagingSenderId': "871167837901",
    'appId': "1:871167837901:web:e731a23bf699677f888b84",
    'databaseURL':""
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()


app = Flask(__name__)


cors = CORS(app)
bcrypt = Bcrypt(app)

app.secret_key = 'secret'

@app.route('/', methods=['POST','GET'])
def home():
    if ('user' in session):
        print(session['user'])
        return 'Hi,{}'.format(session['user'])
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        try:
            user = auth.sign_in_with_email_and_password(email,password)
            session['user'] = email
            print(session['user'])
        except:
            return 'Failed to login'
    return render_template('home.html')


@app.route("/register", methods=["POST"])
def register_user():
    if request.method == 'POST':
        
        data = request.get_json()
        item = {'email': data.get('email'), 'password': data.get('password')}
        email = data.get('email')
        password = data.get('password')
        print(item)
        print(request.form)

        resp = Response("Foo bar baz")
        resp.headers['Access-Control-Allow-Origin']= '*'
        
        try:
            user_exists = auth.sign_in_with_email_and_password(email,password)
            user = auth.create_user_with_email_and_password(email,password)
        except:
            hashed_password = bcrypt.generate_password_hash(password)
            user = auth.create_user_with_email_and_password(email,password)
            session['user'] = email
            print(session['user'])
            info = auth.get_account_info(user['idToken'])
            print(info)
            return resp
        return  resp
    return "ya"

'''@app.route('/register', methods=['POST'])
def register():
    resp = Response("Foo bar baz")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/members')'''
def members():
    return {"members":["member1","member2","member3"]}

'''@app.route('/', methods=['POST','GET'])                     #登入暫存
def home():
    if ('user' in session):
        print(session['user'])
        return 'Hi,{}'.format(session['user'])
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        try:
            user = auth.sign_in_with_email_and_password(email,password)
            session['user'] = email
            print(session['user'])
        except:
            return 'Failed to login'
    return render_template('home.html')'''


if __name__ == '__main__':
     #from gevent import pywsgi

     #server = pywsgi.WSGIServer(('0.0.0.0',5000),app)
     #server.serve_forever()
     app.run(debug=True)
     sys_exit(1)