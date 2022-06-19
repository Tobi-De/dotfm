from dataclasses import dataclass

from pgpubsub.channel import TriggerChannel

from .models import Post


@dataclass
class PostTriggerChannel(TriggerChannel):
    model = Post
