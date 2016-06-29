#!/bin/bash

set -e

host="$1"
shift
cmd="$@"

until curl "$host:9200/_cat/health?v"; do
  >&2 echo "elasticsearch is unavailable - sleeping"
  sleep 1
done

>&2 echo "elasticsearch is up - executing command $cmd"
exec $cmd