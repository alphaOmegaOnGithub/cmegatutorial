FROM ibmcom/db2

RUN mkdir /var/custom
COPY a_setup_governor.sh /var/custom
RUN chmod a+x /var/custom/a_setup_governor.sh
COPY b_create_table.sh /var/custom
RUN chmod a+x /var/custom/b_create_table.sh
