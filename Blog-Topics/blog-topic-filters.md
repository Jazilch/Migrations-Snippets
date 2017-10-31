 When you have a customer that wants to display topics in a specific order use this snippet below. Normally these 
will display in order from their create date in the Blog Topics Tool. This way we can ensure that the blog topics are going
render in a specific order

```
 <h1>{{ group.public_title }}</h1>
    {% set my_topics = blog_topics('default', 5) %}
    <ul>
        <li><a href="{{ group.absolute_url }}">All</a></li>
        {% for item in my_topics %}
            {% if (item.name == "") || (item.name == "") %}
                <li><a href="{{ group.absolute_url }}/topic/{{item.slug}}">{{ item }}</a></li>
            {% endif %}
        {% endfor %}
    </ul>
 ```
