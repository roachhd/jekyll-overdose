---
layout: default
title: Blog
id: blog
---
Most of my words are on Twitter but sometimes, when 140 characters just don't seem enough, I come here and add a few more lines to tell about my work or adventures.


<ul class="posts">
{% for post in site.categories.blog %}
<li>
<a href="{{ post.url }}"><span class="date">{{ post.date | date_to_string }}</span> &#x02014; <strong>{{ post.title }}</strong><span class="arrow">&rsaquo;</span></a>
</li>
{% endfor %}
</ul>
