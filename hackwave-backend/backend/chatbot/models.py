from django.db import models

# These two classes are not related to the others
class FrequentlyAskedQuestion(models.Model):
    question_text = models.CharField(max_length=512)
    
    def __str__(self):
        return self.question_text

class FrequentlyAskedQuestionAnswer(models.Model):
    question_id = models.ForeignKey(FrequentlyAskedQuestion,on_delete=models.CASCADE)
    response_text = models.CharField(max_length=1024)
    
    def __str__(self):
        return self.response_text
    
    

# These classes are related to the user
class Question(models.Model):
    question_text = models.CharField(max_length=512)
    is_frequently_asked = models.BooleanField(default=False)    
    date_time = models.DateTimeField()
    
    def __str__(self):
        return self.question_text

class Response(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    reponse_text = models.CharField(max_length=1024)
    
    def __str__(self):
        return self.reponse_text