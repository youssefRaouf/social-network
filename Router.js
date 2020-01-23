import PostsController from './src/controllers/PostsController';
import UsersController from './src/controllers/UsersController';
import {
	Category,
	CategoryName,
	Brand,
	BrandName,
	BrandRegister,
	Product,
	ProductCategory,
	ProductName,
	ProductPrice,
	ProductSales,
	ProductFeatureVariant,
	FeatureVariant,
	FeatureVariantValue,
} from './dbhelper';
import CommentsController from './src/controllers/CommentsController';

export default class Router {
	constructor(app) {
		this.app = app;
		this.initializeRoutes();
	}

	// async fetchCategories(groupLetter = 'U') {
	// 	const body = {
	// 		getArticles: {
	// 			articleCountry: 'AE',
	// 			provider: 22196,
	// 			lang: 'en',
	// 			perPage: 0,
	// 			page: 1,
	// 			assemblyGroupFacetOptions: {
	// 				enabled: true,
	// 				includeCompleteTree: true,
	// 				assemblyGroupType: groupLetter,
	// 			},
	// 		},
	// 	};
	// 	const res = await allianceRequest(body);
	// 	let cats = res.assemblyGroupFacets.counts;
	// 	cats = cats.map(cat => {
	// 		return {
	// 			parent_id: cat.parentNodeId || parentCategories[cat.assemblyGroupType].category_id,
	// 			category_id: cat.assemblyGroupNodeId,
	// 			category: cat.assemblyGroupName,
	// 		};
	// 	});
	// 	return { parents: Object.values(parentCategories), children: cats };
	// }

	// async fetchBrands(groupLetter = 'U') {
	// 	const body = {
	// 		getManufacturers: {
	// 			country: 'AE',
	// 			lang: 'en',
	// 			linkingTargetType: groupLetter,
	// 			provider: 22196,
	// 		},
	// 	};
	// 	const res = await allianceRequest(body);
	// 	const brands = res.data.array
	// 		.filter(brand => brand.manuName)
	// 		.map(brand => ({
	// 			feature_id: brand.manuId,
	// 			description: brand.manuName,
	// 			full_description: `<p>${brand.manuName}</p>`,
	// 		}));
	// 	return brands;
	// }

	// async migrateCategoryGroup(groupLetter) {
	// 	let { parents, children } = await this.fetchCategories(groupLetter);
	// 	const parentNodes = parents.map(parent => new Node(parent));
	// 	const childNodes = children.map(child => new Node(child));
	// 	parentNodes.forEach(parentNode => {
	// 		parentNode.addChildren(childNodes);
	// 	});
	// 	childNodes.forEach(childNode => {
	// 		childNode.addChildren(childNodes);
	// 	});
	// 	const exec = async (node) => {
	// 		try{
	// 		const {category_id} = await cscartRequest({url: 'categories', method: 'POST', body: {
	// 			meta_keywords: node.data.category_id,
	// 			parent_id: node.data.parent_id,
	// 			category: node.data.category,
	// 			status: "A",
	// 			company_id: 1,
	// 			seo_name: node.data.category,
	// 		}});
	// 		return category_id;
	// 		}catch(e){
	// 			console.log(e)
	// 		}
	// 	}
	// 	for(let i = 0; i < parentNodes.length; i++){
	// 		await dfs(parentNodes[i], exec);
	// 	}
	// 	// const promises = parentNodes.map(parentNode => {
	// 	// 	return dfs(parentNode, exec);
	// 	// });
	// 	// await Promise.all(promises);
	// 	// const allNodes = parentNodes.concat(childNodes);
	// 	// const cats = allNodes.map(node => ({
	// 	// 	meta_keywords: node.data.category_id,
	// 	// 	parent_id: node.data.parent_id,
	// 	// 	id_path: node.data.id_path,
	// 	// 	level: node.data.id_path.split('/').length,
	// 	// }));
	// 	// const catNames = allNodes.map(node => ({
	// 	// 	category_id: node.data.category_id,
	// 	// 	category: node.data.category,
	// 	// }));

	// 	// await Category.bulkCreate(cats, {
	// 	// 	ignoreDuplicates: true,
	// 	// });
	// 	// await CategoryName.bulkCreate(catNames, {
	// 	// 	ignoreDuplicates: true,
	// 	// });
	// 	return { success: true };
	// }

	// async migrateBrandsGroup(groupLetter) {
	// 	const brands = await this.fetchBrands(groupLetter);
	// 	const fIds = brands.map(brand => ({
	// 		feature_id: brand.feature_id,
	// 	}));
	// 	await Brand.bulkCreate(fIds, {
	// 		ignoreDuplicates: true,
	// 	});
	// 	await BrandName.bulkCreate(brands, {
	// 		ignoreDuplicates: true,
	// 	});
	// 	const shareIds = brands.map(brand => ({
	// 		share_object_id: brand.feature_id,
	// 	}));
	// 	await BrandRegister.bulkCreate(shareIds, {
	// 		ignoreDuplicates: true,
	// 	});
	// 	return { success: true };
	// }

	// async migrateProducts(level = 5) {
	// 	try {
	// 		const cats = await Category.findAll({
	// 			where: {
	// 				level: level,
	// 			},
	// 		});
	// 		const promises = cats.map(cat => {
	// 			const body = {
	// 				getArticles: {
	// 					articleCountry: 'AE',
	// 					provider: 22196,
	// 					lang: 'en',
	// 					perPage: 1000,
	// 					page: 1,
	// 					assemblyGroupNodeIds: cat.category_id,
	// 					includeAll: 1,
	// 				},
	// 			};
	// 			const execute = async () => {
	// 				const res = await allianceRequest(body);
	// 				const products = res.articles.map(prod => ({
	// 					product_id: prod.articleNumber,
	// 					product: prod.genericArticles[0].genericArticleDescription,
	// 					category_id: cat.category_id,
	// 					full_description: `<p>${
	// 						prod.articleText && prod.articleText.length > 0 ? prod.articleText[0].text : ''
	// 					}</p>`,
	// 				}));
	// 				await Product.bulkCreate(products, {
	// 					ignoreDuplicates: true,
	// 				});
	// 				await ProductCategory.bulkCreate(products, {
	// 					ignoreDuplicates: true,
	// 				});
	// 				await ProductName.bulkCreate(products, {
	// 					ignoreDuplicates: true,
	// 				});
	// 				await ProductPrice.bulkCreate(products, {
	// 					ignoreDuplicates: true,
	// 				});
	// 				await ProductSales.bulkCreate(products, {
	// 					ignoreDuplicates: true,
	// 				});
	// 				const allValriants = res.articles.reduce((prev, prod) => {
	// 					if (prod.oemNumbers && prod.oemNumbers.length > 0) {
	// 						const variants = prod.oemNumbers.map(varia => {
	// 							counter = counter + 1;
	// 							return {
	// 								variant_id: counter,
	// 								product_id: prod.articleNumber,
	// 								feature_id: varia.mfrId,
	// 								variant: varia.articleNumber,
	// 							};
	// 						});
	// 						prev = prev.concat(variants);
	// 					}

	// 					return prev;
	// 				}, []);
	// 				await FeatureVariantValue.bulkCreate(allValriants, {
	// 					ignoreDuplicates: true,
	// 				});
	// 				await FeatureVariant.bulkCreate(allValriants, {
	// 					ignoreDuplicates: true,
	// 				});
	// 				await ProductFeatureVariant.bulkCreate(allValriants, {
	// 					ignoreDuplicates: true,
	// 				});
	// 				return { success: true };
	// 			};

	// 			return execute();
	// 		});
	// 		return Promise.all(promises);
	// 	}catch(e){
	// 		console.log(e);
	// 	}
	// }

	initializeRoutes() {
		this.app.get('/posts', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const posts = await PostsController.getPosts(Number(offset), Number(limit))
			res.json(posts)
		})
		this.app.get('/posts/:postId', async (req,res)=>{
			const posts = await PostsController.getPostsById(req.params.postId)
			res.json(posts)
		})

		this.app.post('/posts', async (req,res)=>{
			const post = await PostsController.createPost(req.body)
			res.json(post)
		})
		this.app.put('/posts/:postId', async (req,res)=>{
			const posts = await PostsController.updatePost(req.body,req.params.postId)
			res.json(posts)
		})
		this.app.delete('/posts/:postId', async (req,res)=>{
			const posts = await PostsController.deletePost(req.params.postId)
			res.json(posts)
		})




		this.app.get('/users', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const posts = await UsersController.getUsers(Number(offset), Number(limit))
			res.json(posts)
		})
		this.app.get('/users/:userId', async (req,res)=>{
			const posts = await UsersController.getUsersByUserId(req.params.userId)
			res.json(posts)
		})
		this.app.post('/users', async (req,res)=>{
			const posts = await UsersController.createUser(req.body)
			res.json(posts)
		})
		this.app.put('/users/:userId', async (req,res)=>{
			const posts = await UsersController.updateUser(req.body,req.params.userId)
			res.json(posts)
		})
		this.app.delete('/users/:userId', async (req,res)=>{
			const posts = await UsersController.deleteUser(req.params.userId)
			res.json(posts)
		})



		this.app.get('/comments', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const posts = await CommentsController.getComments(Number(offset), Number(limit))
			res.json(posts)
		})
		this.app.get('/comments/:commentId', async (req,res)=>{
			const posts = await CommentsController.getCommentById(req.params.commentId)
			res.json(posts)
		})
		this.app.post('/comments', async (req,res)=>{
			const comments = await CommentsController.createComment(req.body)
			res.json(comments)
		})
		this.app.put('/comments/:commentId', async (req,res)=>{
			const posts = await CommentsController.updateComment(req.body,req.params.commentId)
			res.json(posts)
		})
		this.app.delete('/comments/:commentId', async (req,res)=>{
			const posts = await CommentsController.deleteComment(req.params.commentId)
			res.json(posts)
		})

		this.app.get('/comments/:id/comments', async (req,res)=>{
			const {offset = 0, limit = 15} = req.query;
			const posts = await CommentsController.getComments(Number(offset), Number(limit))
			res.json(posts)
		})

		this.app.post('/comments/:id/comments', async (req,res)=>{
			const posts = await CommentsController.createReply(req.body,req.params.id)
			res.json(posts)
		})

		this.app.delete('/comments/:id/comments', async (req,res)=>{
			const posts = await CommentsController.deleteComment(req.params.commentId)
			res.json(posts)
		})
		// this.app.get('/posts/:id', async (req,res)=>{
		// 	const {offset = 0, limit = 15} = req.query;
		// 	console.log(limit)
		// 	const posts = await PostsController.getPostsById(Number(offset), Number(limit),req.params.id)
		// 	res.json(posts)
		// })
	
		// this.app.post('/migrate/categories', async (req, res) => {
		// 	console.log('insertion of categories start');
		// 	const letter = 'ABMOPU';
		// 	const response = await this.migrateCategoryGroup(letter);
		// 	console.log('insertion of categories end');
		// 	res.json(response);
		// });

		// this.app.post('/migrate/brands', async (req, res) => {
		// 	console.log('insertion of brands start');
		// 	const letter = 'ABMOPU';
		// 	const response = await this.migrateBrandsGroup(letter);
		// 	console.log('insertion of brands end');
		// 	res.json(response);
		// });

		// this.app.post('/migrate/products', async (req, res) => {
		// 	console.log('insertion of products start');
		// 	try{
		// 		await this.migrateProducts(5);
		// 	}catch(e){console.log(e)}
		// 	try{
		// 		await this.migrateProducts(4);
		// 	}catch(e){console.log(e)}
		// 	try{
		// 		await this.migrateProducts(3);
		// 	}catch(e){console.log(e)}
		// 	try{
		// 		await this.migrateProducts(2);
		// 	}catch(e){console.log(e)}
		// 	console.log('insertion of products end');
		// 	res.json({ success: true });
		// });
	}
}
