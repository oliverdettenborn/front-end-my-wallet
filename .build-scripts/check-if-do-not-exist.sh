#!/bin/bash
if [ -e $1 ]
then
    echo $1 "should not exist"
    exit 1
else
    echo $1 "exists"
    exit 0
fi