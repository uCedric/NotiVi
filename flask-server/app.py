import os
import zipfile
from pickle import TRUE
from urllib import response
import urllib
import pyrebase
from flask import Flask, redirect, render_template, url_for, request, session, jsonify , Response,send_file,send_from_directory
from flask_cors import CORS
import bcrypt
from sys import exit as sys_exit
import requests
from google.cloud.firestore_v1 import Increment
import firebase_admin
from firebase_admin import firestore
from firebase_admin import storage as admin_storage
from firebase_admin import credentials
from werkzeug.utils import secure_filename
from io import BytesIO
#from requests import request, session
#pip install Flask-Mail


config={
    "apiKey": "AIzaSyBxID4_kAxePegIf4hav5XU2J6dY2wtsr0",
    "authDomain": "fightiden.firebaseapp.com",
    "databaseURL":"https://fightiden.firebaseapp.com",
    "projectId" : "fightiden",
    "storageBucket": "fightiden.appspot.com",
    "messagingSenderId": "611248274498",
    "appId": "1:611248274498:web:12736121d136ec61cb81db",
    "measurementId": "G-BE77YGKJCV",
    "serviceAccount":"../firebase/privatekey.json"
    }

#andy的config
"""config={
    'apiKey': "AIzaSyAMhO6obi2vNuSAdwMl73o9AOFcdkFDR7Y",
    'authDomain': "project-bc30f.firebaseapp.com",
    'projectId': "project-bc30f",
    'storageBucket': "project-bc30f.appspot.com",
    'messagingSenderId': "871167837901",
    'appId': "1:871167837901:web:e731a23bf699677f888b84",
    'databaseURL':""
}"""
#照片檔的檢查
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
#firebase 應用程式連線
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
storage = firebase.storage()
#firebase DB 連線
if not firebase_admin._apps:
    cred = credentials.Certificate("../firebase/privatekey.json")
    firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

cors = CORS(app)

app.secret_key = 'secret'
#從firebase下載用戶影片
def reset_videos(user_name):
    #把舊影片刪除
    old_videos = os.listdir("../videos/")
    for index,video in old_videos:
        os.remove("../videos/"+video)
    #將使用者影片載下來
    all_files=storage.child("vedios").list_files()
    num=1
    for file in all_files:    
        if(file.name.split("/")[0]=="vedios"):
            if(file.name.split("/")[1]==user_name):
                print(storage.child(file.name).get_url(None)) 
                urllib.request.urlretrieve(storage.child(file.name).get_url(None),"../videos/"+str(num)+".avi") 
                num+=1 
    num=0 
    return "finished"

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

#註冊
@app.route("/register", methods=["POST"])     #註冊帳號
def register_user():
    if request.method == 'POST':

        data = request.get_json()
        email = data.get('email')
        password = data.get('password').encode('utf-8')
        name = data.get('name')
        password = bcrypt.hashpw(password, bcrypt.gensalt())
        resp = Response("")


        #hashed_password = bcrypt.generate_password_hash(password)
        try:
            doc = {
                'name': name,
                'password':password.decode('utf-8')
            }
            #auth.create_user_with_email_and_password(email,password.decode('utf-8'))
            doc_add = db.collection("members").document(email)
            doc_add.set(doc)
        except requests.exceptions.HTTPError as err :
            print(err)

            return  resp,"email_exist"
    return password.decode('utf-8')

#登入
@app.route("/login", methods=["POST"])        #登入
def login():
    if request.method == 'POST':

        data = request.get_json()
        email = data.get('email')
        password = data.get('password').encode('utf-8')
        resp = Response("")

        try:
            #user = auth.sign_in_with_email_and_password(email,password.decode('utf-8'))
            user_doc = db.collection("members").document(email)
            user_email = user_doc.get()
            
            if user_email.exists:
                if bcrypt.hashpw(password, user_doc.get().to_dict()["password"].encode('utf-8')) == user_doc.get().to_dict()["password"].encode('utf-8'):
                    return "成功登入"
                else :
                    return "登入失敗"#$2b$12$2Fsd/H7PDrJMDpE0yo4j2OqdyJKrkyqAD3BoOm9evaGB6rsvH21Om
                                      
        except requests.exceptions.HTTPError as err :
            print(err)
            
            return  resp,"Email_not_not_found"
    return resp

#忘記密碼
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


"""@app.route("/logout", methods = ['GET'])
def logout():

    return"""
#檢視會員資訊
@app.route("/view_cli_info", methods = ['GET'])
def view_cli_info():
    resp = Response("")
    email = "teststorage3@gmail.com"

    doc_ref = db.collection('members')
    docs = doc_ref.get()
    for doc in docs:
        print(u'{} => {}'.format(doc.id, doc.to_dict()))
    
    
    doc_ref = db.collection('members').document(email)
    docs = doc_ref.get()
    print('密碼 => {}'.format(docs.to_dict()['password']))
    password = docs.to_dict()['password']
    
    return jsonify({"password": password})
#修改會員資訊
@app.route("/modify_cli_info", methods = ['PUSH'])
def modify_cli_info():
    resp = Response("")
    email = "teststorage3@gmail.com"
    data = request.get_json()
    password = data.get("password")
    
    doc_ref = db.collection('members').document(email)
    doc_ref.update({
        "password" : password
    })
    
    return jsonify({"password": password})

    return resp
#上傳檔案
@app.route('/upload_pic', methods=['POST'])
def upload_pic():
	# check if the post request has the file part
	if 'file' not in request.files:
		resp = jsonify({'message' : 'No file part in the request'})
		resp.status_code = 400
		return resp
	file = request.files['file']
	if file.filename == '':
		resp = jsonify({'message' : 'No file selected for uploading'})
		resp.status_code = 400
		return resp
	if file and allowed_file(file.filename):
		filename = secure_filename(file.filename)
		#file.save(os.path.join(app.config['../videos'], filename))
		resp = jsonify({'message' : 'File successfully uploaded'})
		resp.status_code = 201
		return resp
	else:
		resp = jsonify({'message' : 'Allowed file types are txt, pdf, png, jpg, jpeg, gif'})
		resp.status_code = 400
		return resp
#檢視影片
@app.route('/download_video',methods=['GET'])
def download_video():
    reset_videos("user1")
    num=1
    file_list = os.listdir("../videos/")
    print(len(file_list))
    with zipfile.ZipFile("./tmp.zip", "w", zipfile.ZIP_DEFLATED) as zf:
        for _file in file_list:
                zf.write("../videos/"+_file,_file)
                num+=1
        
    return send_from_directory(directory="./",path="./",filename="tmp.zip",as_attachment=True)
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