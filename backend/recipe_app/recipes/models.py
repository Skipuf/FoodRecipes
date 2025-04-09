from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='recipes')
    description = models.TextField()
    ingredients = models.TextField()
    instructions = models.TextField()
    image_url = models.URLField(blank=True, null=True)  # <- Добавляем поле для картинки по URL

    def __str__(self):
        return self.title
