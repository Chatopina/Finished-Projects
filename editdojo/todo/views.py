from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Todoitem

def todoView(request):
    all_todo_items = Todoitem.objects.all()
    return render(request, 'todo.htm',
    {"all_items": all_todo_items})

def addTodo(request):
    new_item = Todoitem(content = request.POST['content'])
    new_item.save()
    return HttpResponseRedirect('/todo/')

def deleteTodo(request, todo_id):
    item_to_delete = Todoitem.objects.get(id=todo_id)
    item_to_delete.delete()
    return HttpResponseRedirect('/todo/')


