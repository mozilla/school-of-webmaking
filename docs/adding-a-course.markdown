# How to add a course

To create a new course, add course information in the `_data/course.yml` file.

    unique-category:
      title: "Course title"
      category: unique-category
      language: en
      image: /img/discover-360px.jpg
      image_attribution: http://www.flickr.com/photos/mozillaeu/10491775973/in/photostream/
      attribution_name: Mozilla Europe

`unique-category` should be replaced with a category that is unique to your course. This will also be used as part of the URL where the course will live.

Add your course thumbnail to the /img directory and update the link for `image` to point to the file you added. `image_attribution` and `attribution_name` is used to attribute the image. The image should be licensed under CC-BY-SA.

Next you need to create the actual course content under the `_posts` directory. The filename for the files are important. Because of the way Jekyll works, they need to start with a date. The specific date isn't important, but it will determine the ordering of your course content. 

The second part of the file name is what will become the second part of the URL for the specific content. Ex. if your course category is `learning-html` and you created a new file in `/_posts` called `2000-01-01-about.markdown`, the URL for that page will be `/learning-html/about/`.

File can be either HTML or Markdown files, that depends on what you are comfortable with. If you don't know HTML, go with Markdown. Iow, create a file with a `.markdown` extension.

Regardless of whether you choose Markdown or HTML, the file needs to have the following content at the top:

    ---
    title: Course Title
    layout: multicourse_page
    categories: [unique-category]
    ---

It is important to make sure that the category that you specify here matches with the category you specified in the `_data/courses.yml` file. This is what associates a file in `/_posts` with a specific course.

You can add HTML markup in the `title` field if, for example, you want to add an icon to the title.

After this header, you can add the content for the page in either HTML or Markdown depending on what you chose above.
