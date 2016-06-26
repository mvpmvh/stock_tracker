FROM golang:1.6-alpine

MAINTAINER Michael Hatch <mvhatch@gmail.com>

WORKDIR /go/src/github.com/mvpmvh/stock-tracker-api-server

ADD . /go/src/github.com/mvpmvh/stock-tracker-api-server

RUN apk add -U git && \
  go get -d -v && \
  go install github.com/mvpmvh/stock-tracker-api-server

ENTRYPOINT ["/go/bin/stock-tracker-api-server"]

EXPOSE 3001
