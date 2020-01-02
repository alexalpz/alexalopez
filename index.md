<!DOCTYPE html>
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  </head>
  <body>
    <div>
      <header>
        
        <img src="portrait.JPG" alt="Logo" />
       
        <p>{{ site.description | default: site.github.project_tagline }}</p>

   
        <p class="view"><a href="{{ site.github.owner_url }}">View My GitHub Profile</a></p>

        <ul class="downloads">
          <li><a href="{{ site.github.zip_url }}">Download <strong>RESUME</strong></a></li>
        </ul>
  
      </header>

      <footer>
       
        <p>This project is maintained by <a href="{{ site.github.owner_url }}">{{ site.github.owner_name }}</a></p>
        {% endif %}
        <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
      </footer>
    </div>

  </body>
</html>
