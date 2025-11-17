from notifypy import Notify
from apscheduler.schedulers.blocking import BlockingScheduler

def notify_break_message():
    notification = Notify()
    notification.title = "お知らせ"
    notification.message = "休憩をとろう！"
    notification.send()

scheduler = BlockingScheduler()
scheduler.add_job(
    notify_break_message, 
    'interval',
     seconds=5,
     id='break_message_job')

scheduler.start()

