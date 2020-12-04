#!/bin/bash
if [ -e $1 ]
then
    echo $1 "found"
    exit 0
else
    echo $1 "not found"
    exit 1
fi