--------------------------------------------------------
--  File created - Monday-February-04-2019   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table USERS
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."USERS" 
   (	"ID" NUMBER(*,0), 
	"NAME" VARCHAR2(255 BYTE), 
	"EMAIL" VARCHAR2(255 BYTE), 
	"PASSWORD" VARCHAR2(255 BYTE), 
	"CONTACT" VARCHAR2(255 BYTE), 
	"CITY" VARCHAR2(255 BYTE), 
	"ADDRESS" VARCHAR2(255 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into SYSTEM.USERS
SET DEFINE OFF;
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (3,'punam','shukhu4@gmail.com','password','8420591712','kolkata','kestopur');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (4,'prabhat','sinha@gmail.com','prabh','9999433762','kolkata','kestopur');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (5,'priyonkar','pinku@gmail.com','bulbasur','0332591640','kolkata','rabindrapallyr');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (6,'hello','worldhello@gmail.com','world','6977543210','india','talbagan');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (7,'suraj','jhawar@gmail.com','sun','6977512340','kolkata','howrah');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (8,'sumit','sum@gmail.com','summit','6977152340','delhi','metro station');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (9,'shubham','khush@gmail.com','bharti','6797152340','jaipur','somewhere');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (1,'shubham','dan@fakemail.com','McGhan','1233211234','IT_PROG','2014-12-14T00:00:00.000Z');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (2,'shubham','shukhu10@gmail.com','shu','9748669897','kolkata','kestopur');
Insert into SYSTEM.USERS (ID,NAME,EMAIL,PASSWORD,CONTACT,CITY,ADDRESS) values (10,'pranay','prenav@gmail.com','pandu','9797152340','agra','taj mahal');
--------------------------------------------------------
--  DDL for Index SYS_C004047
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."SYS_C004047" ON "SYSTEM"."USERS" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table USERS
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."USERS" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "SYSTEM"."USERS" MODIFY ("NAME" NOT NULL ENABLE);
 
  ALTER TABLE "SYSTEM"."USERS" MODIFY ("EMAIL" NOT NULL ENABLE);
 
  ALTER TABLE "SYSTEM"."USERS" MODIFY ("PASSWORD" NOT NULL ENABLE);
 
  ALTER TABLE "SYSTEM"."USERS" MODIFY ("CONTACT" NOT NULL ENABLE);
 
  ALTER TABLE "SYSTEM"."USERS" MODIFY ("CITY" NOT NULL ENABLE);
 
  ALTER TABLE "SYSTEM"."USERS" MODIFY ("ADDRESS" NOT NULL ENABLE);
 
  ALTER TABLE "SYSTEM"."USERS" ADD PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
