#!/bin/bash

sentence="$1 $2 $3"

if [ $# -gt 0 ]
then

  for word in $sentence; do
    echo "$word"
  done

else
  echo "No arguments supplied"
fi