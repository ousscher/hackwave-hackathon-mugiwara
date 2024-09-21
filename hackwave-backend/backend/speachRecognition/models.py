from django.db import models

class Discussion(models.Model):
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    discussion_text = models.CharField(max_length=2048)
    

# class Discussion(models.Model):
#     start_datetime = models.DateTimeField()
#     end_datetime = models.DateTimeField()

# class Message(models.Model):
#     discussion_id = models.ForeignKey(Discussion,on_delete=models.CASCADE)
#     message_num = models.IntegerField()
#     message_text = models.CharField(max_length=255)

# class UserProfile(models.Model):
    
#     pass