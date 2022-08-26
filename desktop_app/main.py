# ///////////////////////////////////////////////////////////////
#
# BY: WANDERSON M.PIMENTA
# PROJECT MADE WITH: Qt Designer and PySide6
# V: 1.0.0
#
# This project can be used freely for all uses, as long as they maintain the
# respective credits only in the Python scripts, any information in the visual
# interface (GUI) can be modified without any implication.
#
# There are limitations on Qt licenses if you want to use your products
# commercially, I recommend reading them on the official website:
# https://doc.qt.io/qtforpython/licenses.html
#
# ///////////////////////////////////////////////////////////////

from pickle import GLOBAL
import sys
import os
import platform
import requests
#import fight_pred_function
# IMPORT / GUI AND MODULES AND WIDGETS
# ///////////////////////////////////////////////////////////////
from modules import *
from widgets import *
os.environ["QT_FONT_DPI"] = "96" # FIX Problem for High DPI and Scale above 100%

# SET AS GLOBAL WIDGETS
# ///////////////////////////////////////////////////////////////
widgets = None
isLogin = False

class MainWindow(QMainWindow):
    def __init__(self):
        QMainWindow.__init__(self)

        # SET AS GLOBAL WIDGETS
        # ///////////////////////////////////////////////////////////////
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        global widgets
        widgets = self.ui
       
        # USE CUSTOM TITLE BAR | USE AS "False" FOR MAC OR LINUX
        # ///////////////////////////////////////////////////////////////
        Settings.ENABLE_CUSTOM_TITLE_BAR = True

        # APP NAME
        # ///////////////////////////////////////////////////////////////
        title = "NotiVi"
        description = "NotiVi      居家安全小尖兵"
        # APPLY TEXTS
        self.setWindowTitle(title)
        widgets.titleRightInfo.setText(description)

        # TOGGLE MENU
        # ///////////////////////////////////////////////////////////////
        widgets.toggleButton.clicked.connect(lambda: UIFunctions.toggleMenu(self, True))

        # SET UI DEFINITIONS
        # ///////////////////////////////////////////////////////////////
        UIFunctions.uiDefinitions(self)

        # QTableWidget PARAMETERS
        # ///////////////////////////////////////////////////////////////
        widgets.tableWidget.horizontalHeader().setSectionResizeMode(QHeaderView.Stretch)

        # BUTTONS CLICK
        # ///////////////////////////////////////////////////////////////

        # LEFT MENUS
        widgets.btn_home.clicked.connect(self.buttonClick)
        widgets.btn_settime.clicked.connect(self.buttonClick)
        widgets.btn_new.clicked.connect(self.buttonClick)
        widgets.btn_inform.clicked.connect(self.buttonClick)
        widgets.btn_save.clicked.connect(self.buttonClick)
        widgets.btn_exit.clicked.connect(self.buttonClick)

        #ORIGINAL BUTTON
        widgets.login.clicked.connect(self.buttonClick)
        widgets.confirm.clicked.connect(self.buttonClick)
        widgets.checkvideo.clicked.connect(self.buttonClick)
        widgets.deal.clicked.connect(self.buttonClick)
        widgets.help.clicked.connect(self.buttonClick)
        widgets.compensate.clicked.connect(self.buttonClick)
        widgets.call.clicked.connect(self.buttonClick)
        #UNDO BUTTON
        widgets.undo.clicked.connect(self.buttonClick)
        widgets.undo_2.clicked.connect(self.buttonClick)
        widgets.undo_3.clicked.connect(self.buttonClick)
        widgets.undo_4.clicked.connect(self.buttonClick)

        
        #BUTTON DISABLED
        widgets.btn_settime.setEnabled(False)
        widgets.btn_new.setEnabled(False)
        widgets.btn_save.setEnabled(False)
        widgets.btn_inform.setEnabled(False)
        widgets.btn_exit.setEnabled(False)

        # EXTRA LEFT BOX
        def openCloseLeftBox():
            UIFunctions.toggleLeftBox(self, True)
        widgets.toggleLeftBox.clicked.connect(openCloseLeftBox)
        widgets.extraCloseColumnBtn.clicked.connect(openCloseLeftBox)

        # EXTRA RIGHT BOX
        def openCloseRightBox():
            UIFunctions.toggleRightBox(self, True)
        widgets.settingsTopBtn.clicked.connect(openCloseRightBox)

        # SHOW APP
        # ///////////////////////////////////////////////////////////////
        self.show()

        # SET CUSTOM THEME
        # ///////////////////////////////////////////////////////////////
        useCustomTheme = False
        themeFile = "themes\py_dracula_light.qss"

        # SET THEME AND HACKS
        if useCustomTheme:
            # LOAD AND APPLY STYLE
            UIFunctions.theme(self, themeFile, True)

            # SET HACKS
            AppFunctions.setThemeHack(self)

        # SET HOME PAGE AND SELECT MENU
        # ///////////////////////////////////////////////////////////////
        widgets.stackedWidget.setCurrentWidget(widgets.home)
        widgets.btn_home.setStyleSheet(UIFunctions.selectMenu(widgets.btn_home.styleSheet()))


    # BUTTONS CLICK
    # Post here your functions for clicked buttons
    # ///////////////////////////////////////////////////////////////
    def buttonClick(self):
        # GET BUTTON CLICKED
        btn = self.sender()
        btnName = btn.objectName()

        # SHOW HOME PAGE
        if btnName == "btn_home":
            global isLogin
            if isLogin == False:
                widgets.stackedWidget.setCurrentWidget(widgets.home)
                UIFunctions.resetStyle(self, btnName)
                btn.setStyleSheet(UIFunctions.selectMenu(btn.styleSheet()))
            else:
                widgets.stackedWidget.setCurrentWidget(widgets.welcome)
                UIFunctions.resetStyle(self, btnName)
                btn.setStyleSheet(UIFunctions.selectMenu(btn.styleSheet()))

        # SHOW WIDGETS PAGE
        if btnName == "btn_settime":
            widgets.stackedWidget.setCurrentWidget(widgets.settime)
            UIFunctions.resetStyle(self, btnName)
            btn.setStyleSheet(UIFunctions.selectMenu(btn.styleSheet()))

        # SHOW NEW PAGE
        if btnName == "btn_new":
            widgets.stackedWidget.setCurrentWidget(widgets.new_page) # SET PAGE
            UIFunctions.resetStyle(self, btnName) # RESET ANOTHERS BUTTONS SELECTED
            btn.setStyleSheet(UIFunctions.selectMenu(btn.styleSheet())) # SELECT MENU

        if btnName == "btn_exit":
            widgets.stackedWidget.setCurrentWidget(widgets.home) 
            UIFunctions.resetStyle(self, btnName) 
            print(btn)
            widgets.btn_home.setStyleSheet(UIFunctions.selectMenu(widgets.btn_home.styleSheet())) # SELECT MENU
            widgets.btn_settime.setEnabled(False)
            widgets.btn_new.setEnabled(False)
            widgets.btn_save.setEnabled(False)
            widgets.btn_inform.setEnabled(False)
            widgets.btn_exit.setEnabled(False)
            isLogin = False

        if btnName == "btn_inform":
            widgets.stackedWidget.setCurrentWidget(widgets.inform_menu) # SET PAGE
            UIFunctions.resetStyle(self, "btn_save") # RESET ANOTHERS BUTTONS SELECTED
            btn.setStyleSheet(UIFunctions.selectMenu(btn.styleSheet())) # SELECT MENU
            urllink = "<a href=\"https://www.mohw.gov.tw/cp-190-231-1.html\">更多資訊..." 
            widgets.more_inform.setText(urllink)

        if btnName == "deal":
            widgets.stackedWidget.setCurrentWidget(widgets.inform_deal) # SET PAGE
            text=open('./text/deal.txt',"r",encoding="utf-8").read()
            widgets.TB_deal.setText(text)
        
        if btnName == "help":
            widgets.stackedWidget.setCurrentWidget(widgets.inform_help) # SET PAGE
            text=open('./text/help.txt',"r",encoding="utf-8").read()
            widgets.TB_help.setText(text)

        if btnName == "compensate":
            widgets.stackedWidget.setCurrentWidget(widgets.inform_compensate) # SET PAGE
            text=open('./text/compensate.txt',"r",encoding="utf-8").read()
            widgets.TB_compensate.setText(text)

        if btnName == "call":
            widgets.stackedWidget.setCurrentWidget(widgets.inform_call) # SET PAGE
            text=open('./text/call.txt',"r",encoding="utf-8").read()
            widgets.TB_call.setText(text)

        if btnName == "btn_start_detecting":
            fight_pred_function.start_the_iden()
            print("Save BTN clicked!")
            

        if btnName == "checkvideo":
            self.browsefiles()

        if btnName == "login":
            self.login()

        if btnName == "confirm":
            start_d = widgets.start_date.text()
            final_d = widgets.start_date2.text()
            start_t = widgets.start_time.text()
            final_t = widgets.start_time2.text()
            a = widgets.start_date.date()
            b= widgets.start_date2.date()
            c = widgets.start_time.time()
            d = widgets.start_time2.time()
            data = {
                "year":a.year(),
                "month":a.month(),
                "day":a.day(),
                "hour":c.hour(),
                "min":c.minute(),
                "sec":c.second()
            }
            print(data)
            print(c)
            r = requests.post("http://localhost:5000/qqqq", json = data, verify=False)
            print(f'we will detecting during {start_d} {start_t} ~ {final_d} {final_t}')
            print(f'we will detecting during {a} {b} ~ {c} {d}')

        if btnName == "undo" or btnName == "undo_2" or btnName == "undo_3" or btnName == "undo_4":
            widgets.stackedWidget.setCurrentWidget(widgets.inform_menu) # SET PAGE
            UIFunctions.resetStyle(self, "btn_save") # RESET ANOTHERS BUTTONS SELECTED
            urllink = "<a href=\"https://www.mohw.gov.tw/cp-190-231-1.html\">更多資訊..." 
            widgets.more_inform.setText(urllink)
        # PRINT BTN NAME

        print(f'Button "{btnName}" pressed!')
        

    # RESIZE EVENTS
    # ///////////////////////////////////////////////////////////////
    def resizeEvent(self, event):
        # Update Size Grips
        UIFunctions.resize_grips(self)

    # MOUSE CLICK EVENTS
    # ///////////////////////////////////////////////////////////////
    def mousePressEvent(self, event):
        # SET DRAG POS WINDOW
        self.dragPos = event.globalPos()

        # PRINT MOUSE EVENTS
        if event.buttons() == Qt.LeftButton:
            print('Mouse click: LEFT CLICK')
        if event.buttons() == Qt.RightButton:
            print('Mouse click: RIGHT CLICK')

    def browsefiles(self):

        fname = QFileDialog.getOpenFileName(self)
        fight_pred_function.start_the_iden(fname[0])
        print (fname)


    def login(self):
        global isLogin
        email = widgets.email.text()
        password = widgets.password.text()
        data = {
            "email":email,
            "password":password
        }
        r = requests.post("https://flask-server-7-15.herokuapp.com/login", json = data)
        print(email)
        print(password)
        if r.text == "logined":
            widgets.btn_settime.setEnabled(True)
            widgets.btn_new.setEnabled(True)
            widgets.btn_save.setEnabled(True)
            widgets.btn_inform.setEnabled(True)
            widgets.btn_exit.setEnabled(True)

            widgets.stackedWidget.setCurrentWidget(widgets.welcome)
            widgets.email.setText("")
            widgets.password.setText("")
            isLogin = True

if __name__ == "__main__":
    app = QApplication(sys.argv)
    app.setWindowIcon(QIcon("icon.ico"))
    window = MainWindow()
    sys.exit(app.exec_())