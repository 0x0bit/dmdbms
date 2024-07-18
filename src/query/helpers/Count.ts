import {Criteria, DMQueryBuilder} from "../private/QueryBuilder";

export function Count(tablesplace: string, table: string, criteria: Criteria, caseSensitive?: boolean): any{
  const queryBuilder = new DMQueryBuilder(tablesplace, table, criteria, { caseSensitive });
  const selectClause = queryBuilder.buildSelectCountColoum();
  const fromClause = queryBuilder.buildFrom();
  const joinClause = queryBuilder.buildJoinClause();
  const whereClause = queryBuilder.buildWhereClause();
  const limitClause = queryBuilder.buildLimit();
  const offsetClause = queryBuilder.buildOffset();
  const sortClause = queryBuilder.buildSort();
  const arr = [selectClause, fromClause, joinClause, whereClause, limitClause, offsetClause, sortClause].filter(v => v !== '');
  const sql = arr.join(' ') + ';';
  return sql;
}


