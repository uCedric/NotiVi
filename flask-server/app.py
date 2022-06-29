#from crypt import methods
import os
from pickle import TRUE
from urllib import response
import pyrebase
from flask import Flask, redirect, render_template, url_for, request, session, jsonify , Response
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from sys import exit as sys_exit
import requests

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


@app.route("/register", methods=["POST"])     #註冊帳號
def register_user():
    if request.method == 'POST':
        
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        resp = Response("")
        
        
        #hashed_password = bcrypt.generate_password_hash(password)
        try:
            auth.create_user_with_email_and_password(email,password)
        except requests.exceptions.HTTPError as err :
            print(err)
            
            return  resp,"email_exist"
    return resp


@app.route("/login", methods=["POST"])        #登入
def login():
    if request.method == 'POST':

        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        resp = Response("")

        try:
            user = auth.sign_in_with_email_and_password(email,password)

            info = auth.get_account_info(user['idToken'])
            print(info)

        except requests.exceptions.HTTPError as err :
            print(err)
            
            return  resp,"Email_not_not_found"
    return resp


@app.route("/forget_pswd", methods = ["POST"])
def forget_pswd():
    resp = Response("")
    if request.method == 'POST':
        data = request.get_json()
        email = data.get('email')

        try:
            auth.send_password_reset_email(email)

        except requests.exceptions.HTTPError as err :
            print(err)

            return resp,"Email_not_not_found"
    return resp


@app.route("/logout", methods = ['GET'])
def logout():

    return

@app.route("/view_cli_info", methods = ['GET'])
def view_cli_info():

    return

@app.route("/modify_cli_info", methods = ['PUSH'])
def modify_cli_info():

    return


@app.route("/view_video", methods = ['GET'])
def modify_cli_info():

    return


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