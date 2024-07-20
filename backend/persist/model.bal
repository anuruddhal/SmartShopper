import ballerina/persist as _;
import ballerina/time;
import ballerinax/persist.sql;

type User record {|
    @sql:Generated
    readonly int id;
    string name;
    string email;
    string password;
    string number;
    string profilePic;
    string userRole;
    string status;

    time:Civil createdAt;
    time:Civil updatedAt;
    time:Civil? deletedAt;
    Consumer? consumer;
	Supermarket? supermarket;
|};

type Consumer record {|
    @sql:Generated
    readonly int id;
    User user;
|};

type Product record {|
    @sql:Generated
    readonly int id;
    string name;
    string description;
    float price;
    string imageUrl;
|};

type Supermarket record {|
    @sql:Generated
    readonly int id;
    string name;
    string contactNo;
    string logo;
    string location;
    string address;
    User supermarketManager;
	PriceList[] pricelist;
|};

type PriceList record {|
    @sql:Generated
    readonly int id;
    int productId;
    Supermarket supermarket;
    float price;
    int quantity;
    float discountedTotal;
|};

