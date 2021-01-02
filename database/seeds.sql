-- had to add supplier id this is created when the model is created - mlp
use passport_demo;

INSERT INTO suppliers (supplier_name,created_at,updated_at)
VALUES
('Stark Industries',now(),now())
,('Anvil Corp',now(),now())
,('Wayne Enterprises',now(),now());

use passport_demo;

insert into passport_demo.supplier_map_logins (login_email,supplier_number,created_at, updated_at,supplier_id)
values ('matthewpewewardyxy@gmail.com',2,now(),now(),2);

use passport_demo;

INSERT INTO orders (po_number,item,po_received,po_due_date,supplier_number,created_at,updated_at,supplier_id,supplier_map_login_id)
VALUES 
('12000', 'power stone', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'), 1,now(),now(),1,1)
,('12001', 'time stone', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now(),1,1)
,('12002', 'mark IV suit', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now(),1,1)
,('12003', 'thor hammer', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now(),1,1)
,('12004', 'shield', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now(),1,1)
,('12005', 'eye patch', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2,1)
,('12006', 'gamma radiation', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2,1)
,('12007', 'infinity gauntlet', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2,1)
,('12008', 'fin', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2,1)
,('12009', 'groot seeds', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2,1)
,('12010', 'back eye patch', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now(),2,1)
,('12011', 'black leather trench coat', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),2,1)
,('12012', 'bow', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3,1)
,('12013', 'arrow', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3,1)
,('12014', 'vibranium', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3,1)
,('12015', 'soul stone', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3,1)
,('12016', 'quinjet', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3,1)
,('12017', 'arc reactor',FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3,1)
,('12018', 'war machine suit', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now(),3,1);
