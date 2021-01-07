use passport_demo;

INSERT INTO orders (po_number,item,po_received,po_due_date,supplier_number,created_at,updated_at,supplier_map_login_id)
VALUES 
('12000', 'power stone', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'), 1,now(),now(),1)
,('12001', 'time stone', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now(),1)
,('12002', 'mark IV suit', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now(),1)
,('12003', 'thor hammer', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now(),1)
,('12004', 'shield', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now(),1)
,('12005', 'eye patch', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2)
,('12006', 'gamma radiation', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2)
,('12007', 'infinity gauntlet', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2)
,('12008', 'fin', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2)
,('12009', 'groot seeds', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2)
,('12010', 'back eye patch', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2)
,('12011', 'black leather trench coat', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),2)
,('12012', 'bow', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3)
,('12013', 'arrow', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3)
,('12014', 'vibranium', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3)
,('12015', 'soul stone', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3)
,('12016', 'quinjet', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3)
,('12017', 'arc reactor',FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3)
,('12018', 'war machine suit', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3);

use passport_demo;
-- make sure id starts at one if not you have to run this code 

insert into supplier_map_logins (login_email,supplier_number,created_at, updated_at,supplier_id)
values 
('tonystark@gmail.com',1,now(),now(),1)
,('justinhammer@gmail.com',2,now(),now(),2)
,('brucewayne@gmail.com',3,now(),now(),3)
,('lexluthor@gmail.com',4,now(),now(),4)
,('dococ@gmail.com',5,now(),now(),5)
,('antman@gmail.com',6,now(),now(),6);

use passport_demo;

INSERT INTO suppliers (supplier_name,created_at,updated_at)
VALUES
('Stark Industries',now(),now())
,('Anvil Corp',now(),now())
,('Wayne Enterprises',now(),now())
,('Lex Corp',now(),now())
,('Oscorp',now(),now())
,('Pym Corp',now(),now()) 
