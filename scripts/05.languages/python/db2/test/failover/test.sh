#!/bin/bash

function getTiming(){
    start=$1
    end=$2

    start_s=$(echo $start | cut -d '.' -f 1)
    start_ns=$(echo $start | cut -d '.' -f 2)
    end_s=$(echo $end | cut -d '.' -f 1)
    end_ns=$(echo $end | cut -d '.' -f 2)


    time=$(( ( 10#$end_s - 10#$start_s ) * 1000 + ( 10#$end_ns / 1000000 - 10#$start_ns / 1000000 ) ))

    echo "$time ms"
}

echo "delete pod"
CMD=`kubectl -n db2operator delete pod db2-0`
start=$(date +%s.%N)
echo `date`
echo $start

while true
do
  MASTER_PENDING=`kubectl -n db2operator get pods -L role | grep db2-0 | grep Running`
  if [ -n "$MASTER_PENDING" ];then
    echo $MASTER_PENDING
    echo "statefulset reacts"
    echo `date`
    sts_start=$(date +%s.%N)
    echo $sts_start
    break
  fi
done

while true
do
  MASTER_RUNNING=`kubectl -n db2operator get pods -L role | grep primary | grep Running`
  #echo "$MASTER_RUNNING"
  if [ -n "$MASTER_RUNNING" ];then
    echo $MASTER_RUNNING
    echo "failover finishes"
    end_time=$(date +%s.%N)
    echo $end_time
    echo `date`
    break
  fi
done

echo "react time"
res1=$(getTiming $start $sts_start)
echo $res1

echo "service outage time"
res2=$(getTiming $start $end_time)
echo $res2
