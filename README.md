# Importing fs, url and path

## Objectives

1. Write a script to import fs, url and path
1. Invoke methods from core modules fs, url and path
1. Output results

## Introduction

In this lab, you'll start mastering the three core modules: fs, url and path.

## Instructions

1. Create a program file `url-transformer.js`
2. Read a data file `data/urls.txt` using `fs` and `path.join()` to point to the file
3. Parse each line of the data from the `urls.txt` file with the `url` core module to get only the path name part, i.e., strip away the domain and protocol
4. Write only the path names to a new file `output/paths.txt` using `path` for the path to the file.
5. Print "Transformation completed" when the job is done.
6. Results will be tested at random so manual parsing won't work.


### Extra Info


First three lines of the `data/urls.txt` file out of 1000:

```
http://ning.com/interdum/mauris/non/ligula/pellentesque/ultrices.xml?laoreet=nec&ut=dui&rhoncus=luctus&aliquet=rutrum&pulvinar=nulla&sed=tellus&nisl=in&nunc=sagittis&rhoncus=dui&dui=vel&vel=nisl&sem=duis&sed=ac&sagittis=nibh&nam=fusce&congue=lacus&risus=purus&semper=aliquet&porta=at&volutpat=feugiat&quam=non&pede=pretium&lobortis=quis&ligula=lectus&sit=suspendisse&amet=potenti&eleifend=in&pede=eleifend&libero=quam&quis=a&orci=odio&nullam=in&molestie=hac&nibh=habitasse&in=platea&lectus=dictumst&pellentesque=maecenas&at=ut&nulla=massa&suspendisse=quis&potenti=augue&cras=luctus&in=tincidunt&purus=nulla&eu=mollis&magna=molestie&vulputate=lorem&luctus=quisque&cum=ut&sociis=erat&natoque=curabitur&penatibus=gravida&et=nisi&magnis=at&dis=nibh&parturient=in&montes=hac&nascetur=habitasse&ridiculus=platea
https://livejournal.com/praesent/lectus.json?ut=lectus&suscipit=pellentesque&a=eget&feugiat=nunc&et=donec&eros=quis&vestibulum=orci&ac=eget&est=orci&lacinia=vehicula&nisi=condimentum&venenatis=curabitur&tristique=in&fusce=libero&congue=ut&diam=massa&id=volutpat&ornare=convallis&imperdiet=morbi&sapien=odio&urna=odio&pretium=elementum&nisl=eu&ut=interdum&volutpat=eu&sapien=tincidunt&arcu=in&sed=leo&augue=maecenas&aliquam=pulvinar&erat=lobortis&volutpat=est&in=phasellus&congue=sit&etiam=amet&justo=erat&etiam=nulla&pretium=tempus&iaculis=vivamus&justo=in&in=felis&hac=eu&habitasse=sapien
https://marriott.com/arcu.js?convallis=ut&duis=nunc&consequat=vestibulum&dui=ante&nec=ipsum&nisi=primis&volutpat=in&eleifend=faucibus&donec=orci&ut=luctus&dolor=et&morbi=ultrices&vel=posuere&lectus=cubilia&in=curae&quam=mauris&fringilla=viverra&rhoncus=diam&mauris=vitae&enim=quam&leo=suspendisse&rhoncus=potenti&sed=nullam&vestibulum=porttitor&sit=lacus&amet=at&cursus=turpis&id=donec&turpis=posuere&integer=metus&aliquet=vitae&massa=ipsum&id=aliquam&lobortis=non&convallis=mauris&tortor=morbi&risus=non&dapibus=lectus&augue=aliquam&vel=sit&accumsan=amet&tellus=diam&nisi=in&eu=magna&orci=bibendum&mauris=imperdiet&lacinia=nullam&sapien=orci&quis=pede&libero=venenatis&nullam=non&sit=sodales&amet=sed&turpis=tincidunt&elementum=eu&ligula=felis&vehicula=fusce&consequat=posuere&morbi=felis&a=sed&ipsum=lacus&integer=morbi&a=sem&nibh=mauris&in=laoreet&quis=ut&justo=rhoncus&maecenas=aliquet&rhoncus=pulvinar&aliquam=sed&lacus=nisl&morbi=nunc&quis=rhoncus&tortor=dui&id=vel&nulla=sem&ultrices=sed&aliquet=sagittis&maecenas=nam&leo=congue
```
