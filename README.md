# 中央大學資管系畢業專題-NotiVi

- 專案說明

> NotiVi系統，NotiVi讀音就如同Notify，有提醒的意思，而我們的系統主要的一個強大功能就是在暴力發生時，即時傳送Notification(通知)到使用者(親屬或信任第三方人士)的手機上，除此之外大寫的N和V代表No Violence，同時希望可以遏止暴力行為，打造安全的家庭照護環境。


## 系統開發工具與技術

- firebase：資料庫建置
- Python：後端語言
- React Native：前端語言
- flask：伺服器架設
- CNN-LSTM 模型 (from:https://github.com/mamonraab/Real-Time-Violence-Detection-in-Video-/blob/master/mamonfight22.py)
- Qt Designer




## 系統功能簡介

- 暴力警示功能:利用 AI model 即時監控畫面，偵測到暴力事件過後則第一時間傳送通知至手機端。

<p align="center">
   <img src = "https://github.com/uCedric/NotiVi/blob/master/photos_readme/1.png?raw=true"/>
</p>

- 自動蒐證:系統於暴力事件發生時，將其錄製成3秒的影片，儲存至雲端資料庫，使用者可透過手機App查看現場情況，並以此作為相關證據並進行後續處理。

<p align="center">
   <img src = "https://github.com/uCedric/NotiVi/blob/master/photos_readme/2.png?raw=true"/>
</p>
<p align="center">
   <img src = "https://github.com/uCedric/NotiVi/blob/master/photos_readme/3.png?raw=true"/>
</p>

- 即時報警:除了能夠偵測暴力行為並通知使用者外，app還提供額外的求助資源，如:報警，能夠立即撥打110，省去打開電話輸入號碼的時間；處理原則、宣導資源等，給予使用者相關事件發生時的協助。

<p align="center">
   <img src = "https://github.com/uCedric/NotiVi/blob/master/photos_readme/4.png?raw=true"/>
</p>

- 系統架構:暴力偵測系統需要透過電腦和手機app一起進行，而主要的暴力辨識是藉由家中的電腦端執行，使用者可以事先在家中設定系統運行的時程，從開啟時間到關閉時間依個人需求調整，當使用者外出時，只要有下載手機 app，便能隨時隨地接收到暴力行為發生的通知。


   
