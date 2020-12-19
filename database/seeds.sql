
use passport_demo;
DROP TABLE IF EXISTS open_pos;
CREATE TABLE open_pos (
  
  id INTEGER AUTO_INCREMENT NOT NULL
  
  ,po_number VARCHAR(30) NOT NULL  
  ,item VARCHAR(30) NOT NULL 
  ,po_recieved BOOLEAN NOT NULL
  ,po_due_date date NOT NULL
  ,est_ship_date date 
  ,tracking_number Float
  ,supplier_number integer NOT NULL
   ,PRIMARY KEY (id)
);
DROP TABLE IF EXISTS supplier;
CREATE TABLE supplier (
  
  id INTEGER AUTO_INCREMENT NOT NULL
  ,supplier_name VARCHAR(30) NOT NULL
  ,supplier_number integer NOT NULL
  ,PRIMARY KEY (id)
);
DROP TABLE IF EXISTS supplier_map_login;
CREATE TABLE supplier_map_login (
  
  id INTEGER(11) AUTO_INCREMENT NOT NULL
  ,loginEmail VARCHAR(200)
  ,supplier_number integer NOT NULL
  ,PRIMARY KEY (id)
);

INSERT INTO open_pos (po_number,item,po_recieved,po_due_date,supplier_number)
VALUES 
('12000', 'power stone', FALSE, 11/1/2020,1)
,('12001', 'time stone', FALSE, 12/1/2020,1)
,('12002', 'mark IV suit', FALSE, 1/1/2021,1)
,('12003', 'thor hammer', FALSE, 1/1/2021,1)
,('12004', 'shield', FALSE, 1/1/2021,1)
,('12005', 'eye patch', FALSE, 1/1/2021,2)
,('12006', 'gamma radiation', FALSE, 2/1/2021,2)
,('12007', 'infinity gauntlet', FALSE, 2/1/2021,2)
,('12008', 'fin', FALSE, 2/1/2021,2)
,('12009', 'groot seeds', FALSE, 2/1/2021,2)
,('12010', 'back eye patch', FALSE, 3/1/2021,2)
,('12011', 'black leather trench coat', FALSE, 3/1/2021,3)
,('12012', 'bow', FALSE, 3/1/2021,3)
,('12013', 'arrow', FALSE, 4/1/2021,3)
,('12014', 'vibranium', FALSE, 4/1/2021,3)
,('12015', 'soul stone', FALSE, 5/1/2021,3)
,('12016', 'quinjet', FALSE, 5/1/2021,3)
,('12017', 'arc reactor', FALSE, 6/1/2021,3)
,('12018', 'war machine suit', FALSE, 7/1/2021,3);

INSERT INTO supplier (supplier_number,supplier_name)
VALUES
(1,'Stark Industries')
,(2,'Anvil Corp')
,(3,'Wayne Enterprises')
