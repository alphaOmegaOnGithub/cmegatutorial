#!/bin/bash

while true
do
  MASTER_RUNNING=`kubectl -n db2operator get pods -L role | grep primary | grep Terminating`
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

