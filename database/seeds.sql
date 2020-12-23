
use passport_demo;
TRUNCATE TABLE open_pos 
INSERT INTO open_pos (po_number,item,po_recieved,po_due_date,supplier_number,createdAt,updatedAt)
VALUES 
('12000', 'power stone', FALSE, 11/1/2020, 1,now(),now())
,('12001', 'time stone', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now())
,('12002', 'mark IV suit', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now())
,('12003', 'thor hammer', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now())
,('12004', 'shield', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),1,now(),now())
,('12005', 'eye patch', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now())
,('12006', 'gamma radiation', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now())
,('12007', 'infinity gauntlet', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now())
,('12008', 'fin', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now())
,('12009', 'groot seeds', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now())
,('12010', 'back eye patch', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),2,now(),now())
,('12011', 'black leather trench coat', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now())
,('12012', 'bow', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now())
,('12013', 'arrow', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now())
,('12014', 'vibranium', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now())
,('12015', 'soul stone', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now())
,('12016', 'quinjet', FALSE, STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now())
,('12017', 'arc reactor',STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now())
,('12018', 'war machine suit', FALSE,STR_TO_DATE('1-01-2012', '%d-%m-%Y'),3,now(),now());

INSERT INTO supplier (supplier_number,supplier_name)
VALUES
(1,'Stark Industries')
,(2,'Anvil Corp')
,(3,'Wayne Enterprises')
