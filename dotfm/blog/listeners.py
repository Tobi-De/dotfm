import pgpubsub

from .channels import PostTriggerChannel
from .models import Post


@pgpubsub.post_insert_listener(PostTriggerChannel)
def publishing_post_to_all_channels(old: Post, new: Post):
    print("publishing post to all channels")
