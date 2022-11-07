from django import forms


class SubscriberForm(forms.Form):
    friendly_name = forms.CharField(max_length=255)
    email = forms.EmailField()
