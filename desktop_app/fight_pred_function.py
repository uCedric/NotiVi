from __future__ import absolute_import
from __future__  import division
from __future__ import print_function
import tensorflow as tf
from tensorflow import keras 
from tensorflow.keras import layers 
from tensorflow.keras import models 
from tensorflow.keras import losses 
import numpy as np
from skimage.io import imread
from skimage.transform import resize
import cv2
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import os
import numpy as np
from skimage.transform import resize
import pyrebase
import random
import os
import time
from flask import Flask,jsonify
from sys import exit as sys_exit 
firebaseConfig={
    "apiKey": "AIzaSyBxID4_kAxePegIf4hav5XU2J6dY2wtsr0",
    "authDomain": "fightiden.firebaseapp.com",
    "databaseURL":"https://fightiden.firebaseapp.com",
    "projectId" : "fightiden",
    "storageBucket": "fightiden.appspot.com",
    "messagingSenderId": "611248274498",
    "appId": "1:611248274498:web:12736121d136ec61cb81db",
    "measurementId": "G-BE77YGKJCV"}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()
img_list = os.listdir("./videos/")
total_len = len(img_list)
#randomlist = random.sample(range(0,total_len), 5000)
#store_imgs = [img_list[item] for item in randomlist]
storage = firebase.storage()

def video_mamonreader(cv2,filename):
    frames = np.zeros((30, 160, 160, 3), dtype=np.float)
    i=0
    print(frames.shape)
    vc = cv2.VideoCapture(filename)
    if vc.isOpened():
        rval , frame = vc.read()
    else:
        rval = False
    frm = resize(frame,(160,160,3))
    frm = np.expand_dims(frm,axis=0)
    if(np.max(frm)>1):
        frm = frm/255.0
    frames[i][:] = frm
    i +=1
    print("reading video")
    while i < 30:
        rval, frame = vc.read()
        frm = resize(frame,(160,160,3))
        frm = np.expand_dims(frm,axis=0)
        if(np.max(frm)>1):
            frm = frm/255.0
        frames[i][:] = frm
        i +=1
    return frames

def mamon_videoFightModel2(tf,wight):
    layers = tf.keras.layers
    models = tf.keras.models
    losses = tf.keras.losses
    optimizers = tf.keras.optimizers
    metrics = tf.keras.metrics
    num_classes = 2
    cnn = models.Sequential()
    #cnn.add(base_model)

    input_shapes=(160,160,3)
    np.random.seed(1234)
    vg19 = tf.keras.applications.vgg19.VGG19
    base_model = vg19(include_top=False,weights='imagenet',input_shape=(160, 160,3))
    # Freeze the layers except the last 4 layers
    #for layer in base_model.layers:
    #    layer.trainable = False

    cnn = models.Sequential()
    cnn.add(base_model)
    cnn.add(layers.Flatten())
    model = models.Sequential()

    model.add(layers.TimeDistributed(cnn,  input_shape=(30, 160, 160, 3)))
    model.add(layers.LSTM(30 , return_sequences= True))

    model.add(layers.TimeDistributed(layers.Dense(90)))
    model.add(layers.Dropout(0.1))

    model.add(layers.GlobalAveragePooling1D())

    model.add(layers.Dense(512, activation='relu'))
    model.add(layers.Dropout(0.3))

    model.add(layers.Dense(num_classes, activation="sigmoid"))

    adam = optimizers.Adam(lr=0.0005, beta_1=0.9, beta_2=0.999, epsilon=1e-08)
    model.load_weights(wight)
    rms = optimizers.RMSprop()

    model.compile(loss='binary_crossentropy', optimizer=adam, metrics=["accuracy"])

    return model

def pred_fight(model,video,acuracy):
    pred_test = model.predict(video)
    print(pred_test[0][1])
    if pred_test[0][1] >=acuracy:
        #print(pred_test[0][1])
        return True , pred_test[0][1]
    else:
        return False , pred_test[0][1]

def upload_file():
    local_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    print(total_len)
    try:
        for index,imgName in enumerate(img_list): 
            print(imgName)
            fileUrl = "./videos/"+imgName
            cloudfilename = "videos/user1/"+local_time+"/"+imgName
            storage.child(cloudfilename).put(fileUrl)           
    except:
        print("couldn't upload vedios TAT...")

def status_check(status,frame):
    if status == 1:
        cv2.putText(frame,'Violance Detected!!!',(0, 40),cv2.FONT_HERSHEY_SIMPLEX,1,( 0, 0, 255),2,cv2.LINE_4)
    else:
        cv2.putText(frame,'Non-Violance', (0, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, ( 0, 255, 0), 2,cv2.LINE_4)
    return frame

def start_the_iden(filename):
    model = mamon_videoFightModel2(tf,wight='../fight_model/mamonbest947oscombo.hdfs')
    cap = cv2.VideoCapture(filename)
    i = 0
    frames = np.zeros((30, 160, 160, 3), dtype=np.float)
    old = []
    j = 0
    status=0
    while(True):
        ret, frame = cap.read()
  
        # describe the type of font
        # to be used.
        cv2.imshow('video', frame)
    
        if i > 29:
            ysdatav2 = np.zeros((1, 30, 160, 160, 3), dtype=np.float)
            ysdatav2[0][:][:] = frames
            predaction = pred_fight(model,ysdatav2,0.965)
            if predaction[0] == True:
                status=1
                print('Violance detacted here ...')
            else:
                status=0
            i = 0
            j += 1
            frames = np.zeros((30, 160, 160, 3), dtype=np.float)
            old = []
        else:
            frm = resize(frame,(160,160,3))
            old.append(frame)
            fshape = frame.shape
            fheight = fshape[0]
            fwidth = fshape[1]
            frm = np.expand_dims(frm,axis=0)
            if(np.max(frm)>1):
                frm = frm/255.0
            frames[i][:] = frm
        
            i+=1
        frame = status_check(status,frame)
        fourcc = cv2.VideoWriter_fourcc(*'XVID')
        vio = cv2.VideoWriter("./videos/output-"+str(j)+".avi", fourcc, 10.0, (fwidth,fheight))
        #vio = cv2.VideoWriter("./videos/"+str(j)+".mp4", cv2.VideoWriter_fourcc(*'XVID'), 10, (300, 400))
        for frameinss in old:
            vio.write(frameinss)
        vio.release()
        cv2.imshow('video', frame)
  

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()

    cv2.destroyAllWindows()

"""app = Flask(__name__)
@app.route("/")
def first_page():
    return jsonify({"hello!!!!":"world"})
@app.route("/start",methods=["GET"])
def start():
    start_the_iden()
    upload_file()
    print("TAT")
    return jsonify({"result":"finished"})

if __name__ == "__main__":
    app.run(debug=True)
    sys_exit(1)"""
    