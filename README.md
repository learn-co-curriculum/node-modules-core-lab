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


### Extra Info
