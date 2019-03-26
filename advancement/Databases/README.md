# Databases

A database is defined as a persistent structured set of data held in a computer, and can be accessed in various ways. Databases store data useful for future references, and provides interfaces for this data to be retrieved whenever it is needed. There are various types of databases, each with its pros and cons. Below are some of them listed.

## Postgres

### <u>Pros</u>

- It is scalable and can hadle large amounts of data.
- It has JSON support.
- Has predefined functions.
- Can easily be used with it's default configuration.
- It's free.

### <u>Cons</u>

- It's documentation isn't exhaustive in respect to itself.
- Configuration can be confusing thus its best used with default configurations.

## MySQL

### <u>Pros</u>

- Its free
- It can be made to work with other databases.
- It offers tons of functionality for a free database.

### <u>Cons</u>

- Requires configuration for things available by default in other databases.
- There is no built in support for XML.

## Microsoft SQL Server

### <u>Pros</u>

- Is fast and stable.
- Has the ability to adjust and track performance levels.
- It works well with microsoft products.

### <u>Cons</u>

- It is not free thus this can put off many not willing to pay for database services.
- It gobbles up resources.

## Mongo DB

### <u>Pros</u>

- Fast and easy to use.
- Supports JSON & NoSQL.
- Schema can be written without downtime.
- Can store data of any structure.

### <u>Cons</u>

- Doesnt use SQL.
- Set up might take time.
- Is is not recommended to use with default settings.

# SQL Commands.

## QUERIES

To select all items from a table:
> SELECT * FROM `table_name`;

However, to select specific columns:
> SELECT `column_name`, `column_name2` FROM `table_name`;

You can also get distinct columns to avoid duplication of data within a column:
> SELECT DISTINCT `column_name` FROM `table_name`;

## <u>Ordered Querying</u>

You can also query ordered sets of data:
> SELECT * FROM `table_name` ORDER BY `column_name` DESC;

The above performs ordering in descending order, To make it ascending, replace `DESC` with `ASC`.

## <u>Grouped Querying</u>

To get sets of data grouped by a certain column, then one can use the following command.

> SELECT * FROM `table_name` GROUP BY `column_name`;

However, this form of querying is rarely used by itself. It is mostly used while performing aggregations.

## <u>Conditional querying.</u>

You can also get filtered data from using an sql query:

To fetch columns that match a certain element/item:
> SELECT * FROM `table_name` WHERE `column_name=expected_value`;

You can also use `HAVING` clause for some statements:

> SELECT `column_name` FROM `table_name` WHERE `condition` GROUP BY `column_name` HAVING `condition`;

NOTE :

<i>The main difference in purpose between `HAVING` and `WHERE` clauses is that `HAVING` is used to check for conditions after an aggregation and `WHERE` before aggregation</i>

One could also use operators such as AND & OR to create complex and more specific queries such as:

> SELECT * FROM `table_name` WHERE `condition` AND `condition` OR `condition`;

One can also use negative condition operators such as `NOT`.

> SELECT * FROM `table_name` WHERE NOT `condition`;

One can also use the `LIKE` operator to search filter using pattern.

> SELECT * FROM `table_name` WHERE `column_name` LIKE `pattern`;

There are two wild cards used with the `LIKE` operator:
- `%` - used to represent one or more multiple characters.
- `_` - used to represent one character.

## <u>Usng aggregations in queries</u>

This is done by the use of the inbuilt functions `SUM()`, `COUNT()`, `AVG()`.

> SELECT COUNT(column_name) FROM `table_name`;
> SELECT SUM(column_name) FROM `table_name`;
> SELECT AVG(column_name) FROM `table_name`;

These can be used by the `GROUP BY` to perform the operations to individual groups of the sets of data from the database. `HAVING` can also be used to filter aggregated values appropriately.

> SELECT COUNT(column_name) FROM `table_name` GROUP BY `column_name` HAVING AVG(column_name) > 2;

## INSERTIONS

> INSERT INTO `table_name` (`column_name`, `column_name2`, `column_name3`) VALUES (`value`, `value2`, `value3`);

## UPDATES

> UPDATE `table_name` SET `column_name` = `value`, `column_name2` = `value2` WHERE `condition`

## DELETIONS

> DELETE FROM `table_name` WHERE `condition`;

## JOINS

The `JOIN` clause is used to combine rows from two or more tables based on a related column between them. There are 4 types of JOINS:

- (INNER) JOIN - Returns records that have matching values in both tables.
- LEFT (OUTER) JOIN - Return all records from the left table and all matched values from the right table.
- RIGHT (OUTER) JOIN - Return all records from the right table and all matched values from left table.
- FULL (OUTER) JOIN - Return all records when there is a match in either left or right table.

We will assume we have two tables `Users` and `Todos` where `Todos` is related to `Users` through the `UserID` column name on the tables.

An example of an inner join statement:

> SELECT Users.Name, Todos.Date, Todos.Title FROM UserDetails INNER JOIN Users ON Todos.UserID=Users.UserID;

To use the other `JOINs`, just replace `INNER JOIN` in the above statement with `LEFT JOIN`, `RIGHT JOIN` and `FULL OUTER JOIN`.
