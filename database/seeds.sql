
-- table definitions
CREATE TABLE openPos (
  
  id INTEGER AUTO_INCREMENT NOT NULL
  ,poNum VARCHAR(30) NOT NULL
  ,poLine integer NOT NULL
  ,poReceieved BOOLEAN NOT NULL
  ,poDueDate date NOT NULL
  ,estShipDate date NOT NULL
  ,trackingNumber Float
  ,supplierNumber integer NOT NULL
   ,PRIMARY KEY (id)
);

CREATE TABLE supplier (
  
  id INTEGER AUTO_INCREMENT NOT NULL
  ,supplierName VARCHAR(30) NOT NULL
  ,supplierNumber integer NOT NULL
  ,PRIMARY KEY (id)
);

CREATE TABLE supplierLogInMap (
  
  id INTEGER(11) AUTO_INCREMENT NOT NULL
  ,loginEmail VARCHAR(200) NOT NULL
  ,supplierNumber integer NOT NULL
  ,PRIMARY KEY (id)
);

-- seeds 
