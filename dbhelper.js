const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://admin:admin@localhost/socialdb');

export const Post = sequelize.define(
	'posts',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		text: Sequelize.STRING,
		user_id: Sequelize.INTEGER,
		// level: Sequelize.INTEGER,
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);
export const User = sequelize.define(
	'users',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: Sequelize.STRING,
		image_url: Sequelize.STRING,
		// level: Sequelize.INTEGER,
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);
export const Comment = sequelize.define(
	'comments',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		text: Sequelize.STRING,
		parent_id: Sequelize.INTEGER,
		post_id: Sequelize.INTEGER,
		user_id: Sequelize.INTEGER,
		created_at: Sequelize.TIME,
		// level: Sequelize.INTEGER,
		// company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
	},
	{
		timestamps: false,
	}
);


// export const CategoryName = sequelize.define(
// 	'cscart_category_descriptions',
// 	{
// 		category_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
// 		},
// 		lang_code: { type: Sequelize.STRING, defaultValue: 'en' },
// 		category: Sequelize.STRING,
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const Brand = sequelize.define(
// 	'cscart_product_features',
// 	{
// 		feature_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
// 		},
// 		purpose: { type: Sequelize.STRING, defaultValue: 'find_products' },
// 		feature_style: { type: Sequelize.STRING, defaultValue: 'multiple_checkbox' },
// 		filter_style: { type: Sequelize.STRING, defaultValue: 'checkbox' },
// 		feature_type: { type: Sequelize.STRING, defaultValue: 'M' },
// 		parent_id: { type: Sequelize.INTEGER, defaultValue: 2 },
// 		display_on_header: { type: Sequelize.STRING, defaultValue: 'Y' },
// 		company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const BrandName = sequelize.define(
// 	'cscart_product_features_descriptions',
// 	{
// 		feature_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
// 		},
// 		description: Sequelize.STRING,
// 		full_description: Sequelize.STRING,
// 		lang_code: { type: Sequelize.STRING, defaultValue: 'en' },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const BrandRegister = sequelize.define(
// 	'cscart_ult_objects_sharing',
// 	{
// 		share_object_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
// 		},
// 		share_company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
// 		share_object_type: { type: Sequelize.STRING, defaultValue: 'product_features' },
// 	},
// 	{
//     tableName: "cscart_ult_objects_sharing",
// 		timestamps: false,
// 	}
// );

// export const Product = sequelize.define(
// 	'cscart_products',
// 	{
// 		product_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
// 		},
//     company_id: { type: Sequelize.INTEGER, defaultValue: 1 },
//     amount: { type: Sequelize.INTEGER, defaultValue: 1 },
//     is_pbp: { type: Sequelize.STRING, defaultValue: 'Y' },
//     details_layout: { type: Sequelize.STRING, defaultValue: 'default' },
//     shipping_params: { type: Sequelize.STRING, defaultValue: 'a:5:{s:16:"min_items_in_box";i:0;s:16:"max_items_in_box";i:0;s:10:"box_length";i:0;s:9:"box_width";i:0;s:10:"box_height";i:0;}' },
//     timestamp: { type: Sequelize.INTEGER, defaultValue: Math.round(new Date().getTime()/1000) },
//     updated_timestamp: { type: Sequelize.INTEGER, defaultValue: Math.round(new Date().getTime()/1000) },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const ProductName = sequelize.define(
// 	'cscart_product_descriptions',
// 	{
// 		product_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     lang_code: { type: Sequelize.STRING, defaultValue: 'en' },
//     product: Sequelize.STRING,
//     full_description: Sequelize.STRING
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const ProductCategory = sequelize.define(
// 	'cscart_products_categories',
// 	{
// 		product_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     category_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const ProductPrice = sequelize.define(
// 	'cscart_product_prices',
// 	{
// 		product_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     lower_limit: { type: Sequelize.INTEGER, defaultValue: 1 },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const ProductOptionLink = sequelize.define(
// 	'cscart_product_global_option_links',
// 	{
// 		product_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     option_id: { type: Sequelize.INTEGER, defaultValue: 1 },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const ProductSales = sequelize.define(
// 	'cscart_product_sales',
// 	{
// 		product_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     category_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     amount: { type: Sequelize.INTEGER, defaultValue: 0 },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const FeatureVariantValue = sequelize.define(
// 	'cscart_product_feature_variant_descriptions',
// 	{
// 		variant_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     variant: Sequelize.STRING,
//     lang_code: { type: Sequelize.STRING, defaultValue: 'en' },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const FeatureVariant = sequelize.define(
// 	'cscart_product_feature_variants',
// 	{
// 		variant_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     feature_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export const ProductFeatureVariant = sequelize.define(
// 	'cscart_product_features_values',
// 	{
// 		variant_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     feature_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     product_id: {
// 			type: Sequelize.INTEGER,
// 			primaryKey: true,
//     },
//     lang_code: { type: Sequelize.STRING, defaultValue: 'en' },
//     value: { type: Sequelize.STRING, defaultValue: '' },
// 	},
// 	{
// 		timestamps: false,
// 	}
// );

// export default sequelize;
// // Delete from cscart_categories;
// // Delete from cscart_category_descriptions;

// // Delete from cscart_product_features;
// // Delete from cscart_product_features_descriptions;
// // Delete from cscart_ult_objects_sharing;

// // Delete from cscart_product_features_values;
// // Delete from cscart_product_feature_variants;
// // Delete from cscart_product_feature_variant_descriptions;
// // Delete from cscart_product_sales;
// // Delete from cscart_product_global_option_links;
// // Delete from cscart_product_prices;
// // Delete from cscart_products_categories;
// // Delete from cscart_product_descriptions;
// // Delete from cscart_products;
