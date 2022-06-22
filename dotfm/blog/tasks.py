from django.db import IntegrityError

from .models import Post


def publish_post(pk: int):
    try:
        post = Post.objects.get(pk=pk)
        if not post.is_published:
            post.publish()
    except IntegrityError:
        pass
