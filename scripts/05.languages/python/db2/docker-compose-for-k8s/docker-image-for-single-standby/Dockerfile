FROM ibmcom/db2

COPY install_python2.sh install_python2.sh
RUN bash install_python2.sh
RUN mkdir /var/custom
COPY a_setup_governor.sh /var/custom
RUN chmod a+x /var/custom/a_setup_governor.sh
COPY b_create_table.sh /var/custom
RUN chmod a+x /var/custom/b_create_table.sh
