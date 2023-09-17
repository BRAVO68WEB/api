export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> =
    | T
    | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    timestamptz: { input: any; output: any };
    uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["Int"]["input"]>;
    _gt?: InputMaybe<Scalars["Int"]["input"]>;
    _gte?: InputMaybe<Scalars["Int"]["input"]>;
    _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    _lt?: InputMaybe<Scalars["Int"]["input"]>;
    _lte?: InputMaybe<Scalars["Int"]["input"]>;
    _neq?: InputMaybe<Scalars["Int"]["input"]>;
    _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["String"]["input"]>;
    _gt?: InputMaybe<Scalars["String"]["input"]>;
    _gte?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: InputMaybe<Scalars["String"]["input"]>;
    _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: InputMaybe<Scalars["String"]["input"]>;
    _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** does the column match the given pattern */
    _like?: InputMaybe<Scalars["String"]["input"]>;
    _lt?: InputMaybe<Scalars["String"]["input"]>;
    _lte?: InputMaybe<Scalars["String"]["input"]>;
    _neq?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: InputMaybe<Scalars["String"]["input"]>;
    _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column NOT match the given pattern */
    _nlike?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column match the given SQL regular expression */
    _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "apikey" */
export type Apikey = {
    __typename?: "apikey";
    api_key: Scalars["String"]["output"];
    created_at: Scalars["timestamptz"]["output"];
    updated_at: Scalars["timestamptz"]["output"];
    user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "apikey" */
export type Apikey_Aggregate = {
    __typename?: "apikey_aggregate";
    aggregate?: Maybe<Apikey_Aggregate_Fields>;
    nodes: Array<Apikey>;
};

/** aggregate fields of "apikey" */
export type Apikey_Aggregate_Fields = {
    __typename?: "apikey_aggregate_fields";
    count: Scalars["Int"]["output"];
    max?: Maybe<Apikey_Max_Fields>;
    min?: Maybe<Apikey_Min_Fields>;
};

/** aggregate fields of "apikey" */
export type Apikey_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Apikey_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "apikey". All fields are combined with a logical 'AND'. */
export type Apikey_Bool_Exp = {
    _and?: InputMaybe<Array<Apikey_Bool_Exp>>;
    _not?: InputMaybe<Apikey_Bool_Exp>;
    _or?: InputMaybe<Array<Apikey_Bool_Exp>>;
    api_key?: InputMaybe<String_Comparison_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "apikey" */
export enum Apikey_Constraint {
    /** unique or primary key constraint on columns "api_key" */
    ApikeyApiKeyKey = "apikey_api_key_key",
    /** unique or primary key constraint on columns "user_id" */
    ApikeyPkey = "apikey_pkey",
}

/** input type for inserting data into table "apikey" */
export type Apikey_Insert_Input = {
    api_key?: InputMaybe<Scalars["String"]["input"]>;
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Apikey_Max_Fields = {
    __typename?: "apikey_max_fields";
    api_key?: Maybe<Scalars["String"]["output"]>;
    created_at?: Maybe<Scalars["timestamptz"]["output"]>;
    updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
    user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type Apikey_Min_Fields = {
    __typename?: "apikey_min_fields";
    api_key?: Maybe<Scalars["String"]["output"]>;
    created_at?: Maybe<Scalars["timestamptz"]["output"]>;
    updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
    user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "apikey" */
export type Apikey_Mutation_Response = {
    __typename?: "apikey_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"]["output"];
    /** data from the rows affected by the mutation */
    returning: Array<Apikey>;
};

/** on_conflict condition type for table "apikey" */
export type Apikey_On_Conflict = {
    constraint: Apikey_Constraint;
    update_columns?: Array<Apikey_Update_Column>;
    where?: InputMaybe<Apikey_Bool_Exp>;
};

/** Ordering options when selecting data from "apikey". */
export type Apikey_Order_By = {
    api_key?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: apikey */
export type Apikey_Pk_Columns_Input = {
    user_id: Scalars["uuid"]["input"];
};

/** select columns of table "apikey" */
export enum Apikey_Select_Column {
    /** column name */
    ApiKey = "api_key",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    UpdatedAt = "updated_at",
    /** column name */
    UserId = "user_id",
}

/** input type for updating data in table "apikey" */
export type Apikey_Set_Input = {
    api_key?: InputMaybe<Scalars["String"]["input"]>;
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "apikey" */
export type Apikey_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Apikey_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Apikey_Stream_Cursor_Value_Input = {
    api_key?: InputMaybe<Scalars["String"]["input"]>;
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "apikey" */
export enum Apikey_Update_Column {
    /** column name */
    ApiKey = "api_key",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    UpdatedAt = "updated_at",
    /** column name */
    UserId = "user_id",
}

export type Apikey_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Apikey_Set_Input>;
    /** filter the rows which have to be updated */
    where: Apikey_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
    /** ascending ordering of the cursor */
    Asc = "ASC",
    /** descending ordering of the cursor */
    Desc = "DESC",
}

/** Dev Notes */
export type Devnotes = {
    __typename?: "devnotes";
    content: Scalars["String"]["output"];
    created_at: Scalars["timestamptz"]["output"];
    description: Scalars["String"]["output"];
    id: Scalars["uuid"]["output"];
    title: Scalars["String"]["output"];
    updated_at: Scalars["timestamptz"]["output"];
    views: Scalars["Int"]["output"];
};

/** aggregated selection of "devnotes" */
export type Devnotes_Aggregate = {
    __typename?: "devnotes_aggregate";
    aggregate?: Maybe<Devnotes_Aggregate_Fields>;
    nodes: Array<Devnotes>;
};

/** aggregate fields of "devnotes" */
export type Devnotes_Aggregate_Fields = {
    __typename?: "devnotes_aggregate_fields";
    avg?: Maybe<Devnotes_Avg_Fields>;
    count: Scalars["Int"]["output"];
    max?: Maybe<Devnotes_Max_Fields>;
    min?: Maybe<Devnotes_Min_Fields>;
    stddev?: Maybe<Devnotes_Stddev_Fields>;
    stddev_pop?: Maybe<Devnotes_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Devnotes_Stddev_Samp_Fields>;
    sum?: Maybe<Devnotes_Sum_Fields>;
    var_pop?: Maybe<Devnotes_Var_Pop_Fields>;
    var_samp?: Maybe<Devnotes_Var_Samp_Fields>;
    variance?: Maybe<Devnotes_Variance_Fields>;
};

/** aggregate fields of "devnotes" */
export type Devnotes_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Devnotes_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Devnotes_Avg_Fields = {
    __typename?: "devnotes_avg_fields";
    views?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "devnotes". All fields are combined with a logical 'AND'. */
export type Devnotes_Bool_Exp = {
    _and?: InputMaybe<Array<Devnotes_Bool_Exp>>;
    _not?: InputMaybe<Devnotes_Bool_Exp>;
    _or?: InputMaybe<Array<Devnotes_Bool_Exp>>;
    content?: InputMaybe<String_Comparison_Exp>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    description?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    title?: InputMaybe<String_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    views?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "devnotes" */
export enum Devnotes_Constraint {
    /** unique or primary key constraint on columns "id" */
    DevnotesPkey = "devnotes_pkey",
}

/** input type for incrementing numeric columns in table "devnotes" */
export type Devnotes_Inc_Input = {
    views?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "devnotes" */
export type Devnotes_Insert_Input = {
    content?: InputMaybe<Scalars["String"]["input"]>;
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    description?: InputMaybe<Scalars["String"]["input"]>;
    id?: InputMaybe<Scalars["uuid"]["input"]>;
    title?: InputMaybe<Scalars["String"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    views?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Devnotes_Max_Fields = {
    __typename?: "devnotes_max_fields";
    content?: Maybe<Scalars["String"]["output"]>;
    created_at?: Maybe<Scalars["timestamptz"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["uuid"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
    views?: Maybe<Scalars["Int"]["output"]>;
};

/** aggregate min on columns */
export type Devnotes_Min_Fields = {
    __typename?: "devnotes_min_fields";
    content?: Maybe<Scalars["String"]["output"]>;
    created_at?: Maybe<Scalars["timestamptz"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["uuid"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
    updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
    views?: Maybe<Scalars["Int"]["output"]>;
};

/** response of any mutation on the table "devnotes" */
export type Devnotes_Mutation_Response = {
    __typename?: "devnotes_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"]["output"];
    /** data from the rows affected by the mutation */
    returning: Array<Devnotes>;
};

/** on_conflict condition type for table "devnotes" */
export type Devnotes_On_Conflict = {
    constraint: Devnotes_Constraint;
    update_columns?: Array<Devnotes_Update_Column>;
    where?: InputMaybe<Devnotes_Bool_Exp>;
};

/** Ordering options when selecting data from "devnotes". */
export type Devnotes_Order_By = {
    content?: InputMaybe<Order_By>;
    created_at?: InputMaybe<Order_By>;
    description?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    title?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    views?: InputMaybe<Order_By>;
};

/** primary key columns input for table: devnotes */
export type Devnotes_Pk_Columns_Input = {
    id: Scalars["uuid"]["input"];
};

/** select columns of table "devnotes" */
export enum Devnotes_Select_Column {
    /** column name */
    Content = "content",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    Title = "title",
    /** column name */
    UpdatedAt = "updated_at",
    /** column name */
    Views = "views",
}

/** input type for updating data in table "devnotes" */
export type Devnotes_Set_Input = {
    content?: InputMaybe<Scalars["String"]["input"]>;
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    description?: InputMaybe<Scalars["String"]["input"]>;
    id?: InputMaybe<Scalars["uuid"]["input"]>;
    title?: InputMaybe<Scalars["String"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    views?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Devnotes_Stddev_Fields = {
    __typename?: "devnotes_stddev_fields";
    views?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Devnotes_Stddev_Pop_Fields = {
    __typename?: "devnotes_stddev_pop_fields";
    views?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Devnotes_Stddev_Samp_Fields = {
    __typename?: "devnotes_stddev_samp_fields";
    views?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "devnotes" */
export type Devnotes_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Devnotes_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Devnotes_Stream_Cursor_Value_Input = {
    content?: InputMaybe<Scalars["String"]["input"]>;
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    description?: InputMaybe<Scalars["String"]["input"]>;
    id?: InputMaybe<Scalars["uuid"]["input"]>;
    title?: InputMaybe<Scalars["String"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    views?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Devnotes_Sum_Fields = {
    __typename?: "devnotes_sum_fields";
    views?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "devnotes" */
export enum Devnotes_Update_Column {
    /** column name */
    Content = "content",
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Description = "description",
    /** column name */
    Id = "id",
    /** column name */
    Title = "title",
    /** column name */
    UpdatedAt = "updated_at",
    /** column name */
    Views = "views",
}

export type Devnotes_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Devnotes_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Devnotes_Set_Input>;
    /** filter the rows which have to be updated */
    where: Devnotes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Devnotes_Var_Pop_Fields = {
    __typename?: "devnotes_var_pop_fields";
    views?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Devnotes_Var_Samp_Fields = {
    __typename?: "devnotes_var_samp_fields";
    views?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Devnotes_Variance_Fields = {
    __typename?: "devnotes_variance_fields";
    views?: Maybe<Scalars["Float"]["output"]>;
};

/** mutation root */
export type Mutation_Root = {
    __typename?: "mutation_root";
    /** delete data from the table: "apikey" */
    delete_apikey?: Maybe<Apikey_Mutation_Response>;
    /** delete single row from the table: "apikey" */
    delete_apikey_by_pk?: Maybe<Apikey>;
    /** delete data from the table: "devnotes" */
    delete_devnotes?: Maybe<Devnotes_Mutation_Response>;
    /** delete single row from the table: "devnotes" */
    delete_devnotes_by_pk?: Maybe<Devnotes>;
    /** insert data into the table: "apikey" */
    insert_apikey?: Maybe<Apikey_Mutation_Response>;
    /** insert a single row into the table: "apikey" */
    insert_apikey_one?: Maybe<Apikey>;
    /** insert data into the table: "devnotes" */
    insert_devnotes?: Maybe<Devnotes_Mutation_Response>;
    /** insert a single row into the table: "devnotes" */
    insert_devnotes_one?: Maybe<Devnotes>;
    /** update data of the table: "apikey" */
    update_apikey?: Maybe<Apikey_Mutation_Response>;
    /** update single row of the table: "apikey" */
    update_apikey_by_pk?: Maybe<Apikey>;
    /** update multiples rows of table: "apikey" */
    update_apikey_many?: Maybe<Array<Maybe<Apikey_Mutation_Response>>>;
    /** update data of the table: "devnotes" */
    update_devnotes?: Maybe<Devnotes_Mutation_Response>;
    /** update single row of the table: "devnotes" */
    update_devnotes_by_pk?: Maybe<Devnotes>;
    /** update multiples rows of table: "devnotes" */
    update_devnotes_many?: Maybe<Array<Maybe<Devnotes_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_ApikeyArgs = {
    where: Apikey_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Apikey_By_PkArgs = {
    user_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_DevnotesArgs = {
    where: Devnotes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Devnotes_By_PkArgs = {
    id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_ApikeyArgs = {
    objects: Array<Apikey_Insert_Input>;
    on_conflict?: InputMaybe<Apikey_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Apikey_OneArgs = {
    object: Apikey_Insert_Input;
    on_conflict?: InputMaybe<Apikey_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DevnotesArgs = {
    objects: Array<Devnotes_Insert_Input>;
    on_conflict?: InputMaybe<Devnotes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Devnotes_OneArgs = {
    object: Devnotes_Insert_Input;
    on_conflict?: InputMaybe<Devnotes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ApikeyArgs = {
    _set?: InputMaybe<Apikey_Set_Input>;
    where: Apikey_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Apikey_By_PkArgs = {
    _set?: InputMaybe<Apikey_Set_Input>;
    pk_columns: Apikey_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Apikey_ManyArgs = {
    updates: Array<Apikey_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DevnotesArgs = {
    _inc?: InputMaybe<Devnotes_Inc_Input>;
    _set?: InputMaybe<Devnotes_Set_Input>;
    where: Devnotes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Devnotes_By_PkArgs = {
    _inc?: InputMaybe<Devnotes_Inc_Input>;
    _set?: InputMaybe<Devnotes_Set_Input>;
    pk_columns: Devnotes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Devnotes_ManyArgs = {
    updates: Array<Devnotes_Updates>;
};

/** column ordering options */
export enum Order_By {
    /** in ascending order, nulls last */
    Asc = "asc",
    /** in ascending order, nulls first */
    AscNullsFirst = "asc_nulls_first",
    /** in ascending order, nulls last */
    AscNullsLast = "asc_nulls_last",
    /** in descending order, nulls first */
    Desc = "desc",
    /** in descending order, nulls first */
    DescNullsFirst = "desc_nulls_first",
    /** in descending order, nulls last */
    DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
    __typename?: "query_root";
    /** fetch data from the table: "apikey" */
    apikey: Array<Apikey>;
    /** fetch aggregated fields from the table: "apikey" */
    apikey_aggregate: Apikey_Aggregate;
    /** fetch data from the table: "apikey" using primary key columns */
    apikey_by_pk?: Maybe<Apikey>;
    /** fetch data from the table: "devnotes" */
    devnotes: Array<Devnotes>;
    /** fetch aggregated fields from the table: "devnotes" */
    devnotes_aggregate: Devnotes_Aggregate;
    /** fetch data from the table: "devnotes" using primary key columns */
    devnotes_by_pk?: Maybe<Devnotes>;
};

export type Query_RootApikeyArgs = {
    distinct_on?: InputMaybe<Array<Apikey_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Apikey_Order_By>>;
    where?: InputMaybe<Apikey_Bool_Exp>;
};

export type Query_RootApikey_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Apikey_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Apikey_Order_By>>;
    where?: InputMaybe<Apikey_Bool_Exp>;
};

export type Query_RootApikey_By_PkArgs = {
    user_id: Scalars["uuid"]["input"];
};

export type Query_RootDevnotesArgs = {
    distinct_on?: InputMaybe<Array<Devnotes_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Devnotes_Order_By>>;
    where?: InputMaybe<Devnotes_Bool_Exp>;
};

export type Query_RootDevnotes_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Devnotes_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Devnotes_Order_By>>;
    where?: InputMaybe<Devnotes_Bool_Exp>;
};

export type Query_RootDevnotes_By_PkArgs = {
    id: Scalars["uuid"]["input"];
};

export type Subscription_Root = {
    __typename?: "subscription_root";
    /** fetch data from the table: "apikey" */
    apikey: Array<Apikey>;
    /** fetch aggregated fields from the table: "apikey" */
    apikey_aggregate: Apikey_Aggregate;
    /** fetch data from the table: "apikey" using primary key columns */
    apikey_by_pk?: Maybe<Apikey>;
    /** fetch data from the table in a streaming manner: "apikey" */
    apikey_stream: Array<Apikey>;
    /** fetch data from the table: "devnotes" */
    devnotes: Array<Devnotes>;
    /** fetch aggregated fields from the table: "devnotes" */
    devnotes_aggregate: Devnotes_Aggregate;
    /** fetch data from the table: "devnotes" using primary key columns */
    devnotes_by_pk?: Maybe<Devnotes>;
    /** fetch data from the table in a streaming manner: "devnotes" */
    devnotes_stream: Array<Devnotes>;
};

export type Subscription_RootApikeyArgs = {
    distinct_on?: InputMaybe<Array<Apikey_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Apikey_Order_By>>;
    where?: InputMaybe<Apikey_Bool_Exp>;
};

export type Subscription_RootApikey_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Apikey_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Apikey_Order_By>>;
    where?: InputMaybe<Apikey_Bool_Exp>;
};

export type Subscription_RootApikey_By_PkArgs = {
    user_id: Scalars["uuid"]["input"];
};

export type Subscription_RootApikey_StreamArgs = {
    batch_size: Scalars["Int"]["input"];
    cursor: Array<InputMaybe<Apikey_Stream_Cursor_Input>>;
    where?: InputMaybe<Apikey_Bool_Exp>;
};

export type Subscription_RootDevnotesArgs = {
    distinct_on?: InputMaybe<Array<Devnotes_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Devnotes_Order_By>>;
    where?: InputMaybe<Devnotes_Bool_Exp>;
};

export type Subscription_RootDevnotes_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Devnotes_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Devnotes_Order_By>>;
    where?: InputMaybe<Devnotes_Bool_Exp>;
};

export type Subscription_RootDevnotes_By_PkArgs = {
    id: Scalars["uuid"]["input"];
};

export type Subscription_RootDevnotes_StreamArgs = {
    batch_size: Scalars["Int"]["input"];
    cursor: Array<InputMaybe<Devnotes_Stream_Cursor_Input>>;
    where?: InputMaybe<Devnotes_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["uuid"]["input"]>;
    _gt?: InputMaybe<Scalars["uuid"]["input"]>;
    _gte?: InputMaybe<Scalars["uuid"]["input"]>;
    _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    _lt?: InputMaybe<Scalars["uuid"]["input"]>;
    _lte?: InputMaybe<Scalars["uuid"]["input"]>;
    _neq?: InputMaybe<Scalars["uuid"]["input"]>;
    _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};
