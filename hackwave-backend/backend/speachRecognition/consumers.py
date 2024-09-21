import json
import datetime
from channels.generic.websocket import WebsocketConsumer
from .models import *
from . import SETUP_MESSAGES
from .utils import *

class SpeachConsumer(WebsocketConsumer):
    def __init__(self):
        super().__init__(self)
        self.disc = Discussion()
        self.num_messages_sent = 0
        
    def append_msg(self,msg):
        self.disc.discussion_text += "\n"+msg.lower()
        
        return self.disc
    
    def connect(self):
        self.accept()
        self.disc.start_datetime = datetime.datetime.now()
        msg = SETUP_MESSAGES[self.num_messages_sent]
        
        self.num_messages_sent+=1
        self.append_msg(msg)
        
        self.send(msg)
        
    def receive(self, text_data):
        # pass
        self.append_msg(text_data)
        if (self.num_messages_sent<len(SETUP_MESSAGES)):
            self.send(SETUP_MESSAGES[self.num_messages_sent])
            self.append_msg(SETUP_MESSAGES[self.num_messages_sent])
            
            self.num_messages_sent +=1
        
        elif(self.num_messages_sent==len(SETUP_MESSAGES)):            
            ex = extract_answers(self.disc.discussion_text)
            self.send (ex)
            self.append_msg(ex)
            
            self.num_messages_sent +=1
        
        # elif(self.num_messages_sent==5):
            
            msg = "Veuillez choisir votre profile\n"
            msg+= "Tapez 1, si vous etes un porteur de carte CIB\n"
            msg+= "Tapez 2, si vous etes une banque\n"
            msg+= "Tapez 3, si vous etes un commerçant\n"
            msg+= "Tapez 4, si autre\n"
            
            self.send(msg)
            self.append_msg(msg)
            
            self.num_messages_sent +=1
            
        
        
            
        
    def disconnect(self, code):
        self.disc.end_datetime=datetime.datetime.now()
        # self.disc.save()
