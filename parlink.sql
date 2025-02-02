-- MySQL dump 10.13  Distrib 9.1.0, for Linux (x86_64)
--
-- Host: eu-cluster-west-01.k8s.cleardb.net    Database: heroku_7571c5abe4b8862
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Ad`
--

DROP TABLE IF EXISTS `Ad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ad` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postalCode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attendees` int DEFAULT NULL,
  `transport` enum('car','van') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `conform` tinyint(1) DEFAULT NULL,
  `status` enum('cancel','report') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adPicture` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subCategoryId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'test',
  PRIMARY KEY (`id`),
  KEY `user_id` (`userId`),
  KEY `category_id` (`categoryId`),
  KEY `subCategory_id` (`subCategoryId`),
  CONSTRAINT `Ad_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Ad_subCategoryId_fkey` FOREIGN KEY (`subCategoryId`) REFERENCES `SubCategory` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Ad_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ad`
--

LOCK TABLES `Ad` WRITE;
/*!40000 ALTER TABLE `Ad` DISABLE KEYS */;
INSERT INTO `Ad` VALUES ('1b4e2ad2-2523-40d5-bcc9-ea7f2fc9eed6','enim nesciunt cumque eveniet rerum','Quidem provident quam quis ipsum ratione. Laborum accusamus quis occaecati quis. Culpa repellat a.','2025-02-05 14:22:18','2025-02-05 15:22:18',1,'4763 Voie de la Pompe','77463','Paris','France',61,'van',0,'report','https://loremflickr.com/640/480?lock=4895620001169','2024-07-28 11:19:36.711','2024-07-28 11:19:36.711','58db9331-51bd-4dc2-b470-6f9a1afd2965','0303732c-5663-40de-8d21-06e091fe98ba','6cf296bb-f15c-4040-b862-ebfa9c0ca46e'),('1f1783df-490b-4c3c-97ca-4f03746a53a3','assumenda sed ad tenetur cupiditate','Cumque inventore illo rem debitis iure iure inventore. Dolorem odio sapiente adipisci molestiae nesciunt perspiciatis molestiae dolor beatae. Incidunt quae harum.','2025-04-14 17:02:35','2025-04-14 18:02:35',1,'455 Voie de la B├╗cherie','65845','V├®nissieux','France',31,'van',0,'cancel','https://picsum.photos/seed/Vu0zoYTk4/640/480','2024-07-28 11:19:36.431','2024-07-28 11:19:36.431','27da5ab9-116a-4e32-afc6-e960419c2fb0','0303732c-5663-40de-8d21-06e091fe98ba','b733f419-7cc0-44e4-af03-ba5559c11b5c'),('1f4d5317-456a-46e4-ad67-7906d8297f47','unde delectus odit natus dolorem','Quidem architecto earum ea provident. Illum quibusdam rem officia cupiditate. Voluptatem ullam eius fugiat illo ab.','2025-02-16 11:02:41','2025-02-16 12:02:41',1,'6352 Place Laffitte','33100','Nancy','France',27,'car',1,'report','https://picsum.photos/seed/gtuVrL/640/480','2024-07-28 11:19:36.400','2024-07-28 11:19:36.400','27da5ab9-116a-4e32-afc6-e960419c2fb0','8bc94900-4574-4db7-8b3f-c84d561636b2','8e2668c7-75ae-4816-a44f-1628708b210f'),('221bf653-c603-4c9e-bc84-0beec65e7602','tempore explicabo perferendis iure est','Doloribus commodi in. In magni accusantium iure quisquam dicta expedita quia. Nisi sint blanditiis animi possimus qui veniam alias.','2025-04-01 06:05:39','2025-04-01 07:05:39',1,'9407 Boulevard Pastourelle','33509','Colombes','France',12,'car',1,'report','https://loremflickr.com/640/480?lock=8531943282966','2024-07-28 11:19:36.419','2024-07-28 11:19:36.419','27da5ab9-116a-4e32-afc6-e960419c2fb0','3474fc6e-1929-41fe-9216-575dfbe99b96','6cf296bb-f15c-4040-b862-ebfa9c0ca46e'),('2f64d8a9-b080-4770-9312-8a33e2dba153','a ab asperiores velit quaerat','Error nihil rerum. Reprehenderit aperiam dolor quo enim. Consectetur exercitationem consequatur.','2024-12-10 07:57:40','2024-12-10 08:57:40',1,'965 Rue d\'Abbeville','75099','Brest','France',17,'car',1,'report','https://picsum.photos/seed/7MjPD/640/480','2024-07-28 11:19:38.397','2024-07-28 11:19:38.397','1dbd02ce-25fb-4932-8fea-b9f54c943e99','0303732c-5663-40de-8d21-06e091fe98ba','a370e963-4783-47f4-8a92-f8306b2c06f2'),('31e2949f-2244-42d2-8c23-8b95066a1037','facilis aspernatur voluptatem quia harum','Molestias voluptatem dolorum asperiores repellendus nostrum. Numquam dicta amet itaque ex dolorem eos vero blanditiis. Asperiores unde quod unde quis ea recusandae vel est.','2025-02-20 13:55:11','2025-02-20 14:55:11',1,'25 Rue Saint-Honor├®','74540','Bourges','France',37,'car',0,'report','https://loremflickr.com/640/480?lock=8338969959858','2024-07-28 11:19:38.935','2024-07-28 11:19:38.935','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','d6732b55-c80e-444d-a4bb-28164f81feeb','8e2668c7-75ae-4816-a44f-1628708b210f'),('36ed1ee4-f3ef-41d1-8724-62f07f128cca','magni ipsam voluptatibus sint aperiam','Fugiat quibusdam quisquam voluptatum quod natus accusantium reiciendis illum labore. Veniam sit omnis dolores non sed error ullam. At sed autem ad doloremque placeat libero repudiandae suscipit.','2024-09-01 01:54:58','2024-09-01 02:54:58',1,'611 Place de la B├╗cherie','30916','Mulhouse','France',91,'van',0,'cancel','https://picsum.photos/seed/FVC0t/640/480','2024-07-28 11:19:38.130','2024-07-28 11:19:38.130','5a56cd3c-c761-4e58-a9ed-48e1604cf63c','0303732c-5663-40de-8d21-06e091fe98ba','f0387660-61ae-46a5-ba43-1f5ab411d4dc'),('37067192-6094-401f-9456-0148025ac166','amet sed explicabo qui cupiditate','Libero eius harum vero accusantium quas itaque. Impedit minima eveniet quibusdam facere a dolorem dicta quasi nam. Error quasi fugiat.','2025-06-10 17:48:32','2025-06-10 18:48:32',1,'5999 Voie du Bac','73973','Levallois-Perret','France',31,'car',1,'cancel','https://picsum.photos/seed/FxIJrqN4yh/640/480','2024-07-28 11:19:36.724','2024-07-28 11:19:36.724','58db9331-51bd-4dc2-b470-6f9a1afd2965','3474fc6e-1929-41fe-9216-575dfbe99b96','75861639-dffe-426b-a638-bf7f5a0154f1'),('381fcfa7-1d3c-4b68-b02f-f2cb044269cf','maiores mollitia assumenda ullam officia','Laboriosam sed ipsam iste aspernatur dolorem totam dicta veniam natus. Possimus quo eligendi quod occaecati odit. Magni quas ipsam aspernatur sit ex id officiis.','2024-10-14 17:52:46','2024-10-14 18:52:46',1,'3 Quai de Presbourg','28702','Strasbourg','France',59,'car',1,'report','https://picsum.photos/seed/yc6at/640/480','2024-07-28 11:19:37.865','2024-07-28 11:19:37.865','8b468fba-8193-495b-b9b8-f412b974fa28','8bc94900-4574-4db7-8b3f-c84d561636b2','c867d414-92c2-4528-b21d-f364a642e972'),('3aabb5bd-4cf0-4631-abf7-18d3512e3208','soluta quas sed quos atque','Est aut minima delectus et consequuntur facilis. Dolore ut exercitationem quas aut nemo. Dignissimos odit consectetur ipsum repellendus aut optio nihil veritatis rem.','2024-07-28 12:41:33','2024-07-28 13:41:33',1,'1996 Boulevard de Vaugirard','41911','Courbevoie','France',55,'car',0,'report','https://loremflickr.com/640/480?lock=3330840249499','2024-07-28 11:19:37.599','2024-07-28 11:19:37.599','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','0303732c-5663-40de-8d21-06e091fe98ba','89ffae78-6bde-46b8-9af1-94e898765259'),('516350bf-6e67-4e0f-827e-962f7b430993','magnam aliquam dolorum temporibus iusto','Saepe quaerat aperiam doloremque. Velit repudiandae maxime iusto fuga quis aspernatur placeat. Occaecati ea ipsum.','2025-07-24 16:09:13','2025-07-24 17:09:13',1,'5006 Quai du Havre','95926','Le Tampon','France',51,'car',1,'report','https://picsum.photos/seed/gO8kE/640/480','2024-07-28 11:19:37.571','2024-07-28 11:19:37.571','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','d6732b55-c80e-444d-a4bb-28164f81feeb','75861639-dffe-426b-a638-bf7f5a0154f1'),('64f54f3f-b540-4c20-9ab5-c3d46bc8c228','mollitia modi eum repudiandae cum','Possimus ducimus voluptate ratione cupiditate magnam excepturi corrupti. Perferendis quia harum delectus veritatis ullam quae impedit sunt. Repellat accusantium iusto corporis autem sunt minus minima inventore occaecati.','2024-12-21 18:17:07','2024-12-21 19:17:07',1,'24 Rue du Faubourg Saint-Honor├®','90806','Bordeaux','France',77,'van',0,'cancel','https://picsum.photos/seed/kdhmHG/640/480','2024-07-28 11:19:38.667','2024-07-28 11:19:38.667','6b822864-6bba-4414-a89e-8d259604ff92','8bc94900-4574-4db7-8b3f-c84d561636b2','2acc0548-57d6-4891-8d6f-123b32d7d929'),('75af7a14-50d6-4aca-ba87-3b279b09c5f8','ipsum a autem dignissimos hic','Iste nulla cumque veniam. Maxime odio esse consequuntur consectetur alias tempora reiciendis ullam. Nisi modi ipsam.','2024-10-22 21:32:46','2024-10-22 22:32:46',1,'47 Quai d\'Argenteuil','67486','Caen','France',26,'car',1,'report','https://picsum.photos/seed/bOsqUIaVL/640/480','2024-07-28 11:19:37.024','2024-07-28 11:19:37.024','4243a065-43b9-4b4f-a82e-9ed675eccf5f','0303732c-5663-40de-8d21-06e091fe98ba','75861639-dffe-426b-a638-bf7f5a0154f1'),('784f7217-f377-430e-ad28-09c19e4f62d1','sed in ad deleniti officia','Harum culpa aliquam adipisci. Architecto praesentium iure necessitatibus blanditiis exercitationem rerum doloribus. Incidunt officia aut facere culpa maiores doloremque iusto dolorem distinctio.','2025-02-07 07:06:11','2025-02-07 08:06:11',1,'4743 Impasse de Paris','06491','Besan├ºon','France',44,'van',1,'cancel','https://loremflickr.com/640/480?lock=3494214392348','2024-07-28 11:19:38.411','2024-07-28 11:19:38.411','1dbd02ce-25fb-4932-8fea-b9f54c943e99','8bc94900-4574-4db7-8b3f-c84d561636b2','75861639-dffe-426b-a638-bf7f5a0154f1'),('787bc86f-83fb-4954-9f0b-34ab3b8b6e83','perferendis perferendis amet animi dicta','Quo dolore quaerat. Est veritatis tempora. Nihil laudantium quibusdam quaerat corporis.','2025-02-04 18:10:44','2025-02-04 19:10:44',1,'148 Voie Du Sommerard','07244','Sarcelles','France',63,'car',0,'cancel','https://loremflickr.com/640/480?lock=3587256398905','2024-07-28 11:19:37.851','2024-07-28 11:19:37.851','8b468fba-8193-495b-b9b8-f412b974fa28','d6732b55-c80e-444d-a4bb-28164f81feeb','6cf296bb-f15c-4040-b862-ebfa9c0ca46e'),('8a3a3905-75b1-408c-857c-70cdb18bf6ef','autem aut ea fugiat inventore','Quibusdam veritatis inventore possimus deserunt. Odio corporis labore temporibus laboriosam eaque alias porro mollitia vel. Culpa veritatis magnam a explicabo at officiis inventore ipsum.','2024-12-06 13:32:46','2024-12-06 14:32:46',1,'80 Place Delesseux','00974','Avignon','France',73,'van',0,'report','https://loremflickr.com/640/480?lock=6572547034316','2024-07-28 11:19:38.425','2024-07-28 11:19:38.425','1dbd02ce-25fb-4932-8fea-b9f54c943e99','0303732c-5663-40de-8d21-06e091fe98ba','c867d414-92c2-4528-b21d-f364a642e972'),('8edda21e-4a45-41e8-86bb-1442a2e33cfa','inventore mollitia quam asperiores cum','Asperiores accusamus neque earum. Animi quo reiciendis facere ea quis esse fugit occaecati. Quidem suscipit porro.','2025-02-22 17:24:15','2025-02-22 18:24:15',1,'4 Quai de Solf├®rino','46420','Ajaccio','France',88,'car',0,'cancel','https://picsum.photos/seed/dsFAFj4/640/480','2024-07-28 11:19:37.275','2024-07-28 11:19:37.275','ef6612b2-b54d-45c0-8530-0fcb6a622ed5','8bc94900-4574-4db7-8b3f-c84d561636b2','c0b52e20-38be-4935-a8bf-b1518a7694a0'),('bcf27f4e-8a0c-4d84-980e-8d55b71257a8','minima hic voluptatum qui dolores','Quo nobis totam blanditiis cum perspiciatis rem. Cum omnis odio. Quam qui aliquid architecto praesentium laboriosam saepe similique voluptas.','2024-10-30 13:48:21','2024-10-30 14:48:21',1,'21 Passage Saint-S├®verin','05433','B├®ziers','France',69,'car',1,'cancel','https://loremflickr.com/640/480?lock=5047347178373','2024-07-28 11:19:37.289','2024-07-28 11:19:37.289','ef6612b2-b54d-45c0-8530-0fcb6a622ed5','0303732c-5663-40de-8d21-06e091fe98ba','2acc0548-57d6-4891-8d6f-123b32d7d929'),('c0e80b5e-dbe7-427a-ba1c-cd652fea1551','excepturi suscipit maiores praesentium vero','Animi vel fugit libero. Commodi temporibus autem distinctio cum. Soluta nihil veritatis.','2025-06-11 19:43:58','2025-06-11 20:43:58',1,'6118 Impasse du Chat-qui-P├¬che','12033','Caen','France',21,'car',1,'cancel','https://loremflickr.com/640/480?lock=3105823932809','2024-07-28 11:19:37.878','2024-07-28 11:19:37.878','8b468fba-8193-495b-b9b8-f412b974fa28','d6732b55-c80e-444d-a4bb-28164f81feeb','2acc0548-57d6-4891-8d6f-123b32d7d929'),('c48fb03f-c7cb-4a92-a5b3-2148abf4ca53','labore dicta accusantium consequuntur doloribus','Nihil recusandae enim provident. Quia quas nihil illo magnam perspiciatis quia. Consequuntur sunt quidem minus.','2025-06-29 06:57:17','2025-06-29 07:57:17',1,'5 Voie Laffitte','08095','Valence','France',28,'van',1,'report','https://loremflickr.com/640/480?lock=1108430383218','2024-07-28 11:19:38.910','2024-07-28 11:19:38.910','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','3474fc6e-1929-41fe-9216-575dfbe99b96','3a09e603-a683-4d7f-b436-4f5518094386'),('c4a3dfda-83ff-4a76-998a-a4858d5023b5','iusto asperiores ullam veniam reprehenderit','Ullam qui quaerat accusamus odit atque sequi fugiat facilis. Doloribus corrupti sed. Autem impedit ullam libero itaque deleniti modi odit.','2024-12-15 09:53:31','2024-12-15 10:53:31',1,'89 Boulevard Mouffetard','78382','Levallois-Perret','France',41,'van',0,'cancel','https://picsum.photos/seed/cHvsRr9/640/480','2024-07-28 11:19:38.922','2024-07-28 11:19:38.922','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','8bc94900-4574-4db7-8b3f-c84d561636b2','2fdf892c-70c8-48cf-bfcc-25787b68be8d'),('c80b1c04-c7cb-41df-91bf-9ca17cbf74a3','dolorum dolorem ea in cumque','Deleniti asperiores consequatur id perspiciatis placeat ratione. Voluptatum neque exercitationem. Ullam molestias nam iste.','2024-12-15 14:22:10','2024-12-15 15:22:10',1,'5 Place Saint-Bernard','48551','Grenoble','France',86,'car',1,'report','https://picsum.photos/seed/6iJHQTmvuz/640/480','2024-07-28 11:19:38.654','2024-07-28 11:19:38.654','6b822864-6bba-4414-a89e-8d259604ff92','8bc94900-4574-4db7-8b3f-c84d561636b2','4a96e818-4ab9-42d4-9216-521096bb66b9'),('cb0ab886-0930-4d12-925e-ee230974d83f','consequuntur omnis distinctio cum ullam','Sint repellat dignissimos. Eius dolorum excepturi cum vero. Deleniti accusamus placeat adipisci dicta ea nisi et doloremque.','2024-08-20 18:03:08','2024-08-20 19:03:08',1,'480 Rue de Vaugirard','25660','Bordeaux','France',14,'van',0,'report','https://picsum.photos/seed/T3xEQtPsn4/640/480','2024-07-28 11:19:37.586','2024-07-28 11:19:37.586','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','d6732b55-c80e-444d-a4bb-28164f81feeb','29555c5c-bd85-47af-bb66-a33224f78a92'),('ce07fc33-f3a6-43e9-9b00-5728d9a93674','maxime est voluptatem dolor illum','Exercitationem provident iusto quidem. Tempora modi iure esse dolorem in possimus. Fugiat esse corrupti voluptates corrupti.','2024-11-12 03:08:00','2024-11-12 04:08:00',1,'323 Impasse Pastourelle','44341','Saint-Pierre','France',52,'car',0,'cancel','https://picsum.photos/seed/I6LvgKUQSP/640/480','2024-07-28 11:19:37.011','2024-07-28 11:19:37.011','4243a065-43b9-4b4f-a82e-9ed675eccf5f','d6732b55-c80e-444d-a4bb-28164f81feeb','c0b52e20-38be-4935-a8bf-b1518a7694a0'),('cfb97578-72c2-45a7-a3ec-640f54769e73','cum quia ea dicta non','Dolor qui ipsam perspiciatis consequatur culpa maxime minus maiores odio. Ad praesentium dolorem nulla recusandae iste soluta. Voluptatibus mollitia quaerat et ullam facere facere blanditiis ex.','2024-12-30 12:11:47','2024-12-30 13:11:47',1,'87 Quai de Richelieu','68507','Montpellier','France',13,'van',0,'cancel','https://loremflickr.com/640/480?lock=6016825263390','2024-07-28 11:19:36.699','2024-07-28 11:19:36.699','58db9331-51bd-4dc2-b470-6f9a1afd2965','d6732b55-c80e-444d-a4bb-28164f81feeb','89ffae78-6bde-46b8-9af1-94e898765259'),('cm02cw2i500008hwimhydvmij','Test annonce','Ma description','2024-08-27 10:00:00','2024-08-27 11:00:00',8,'10 rue de l\'argonne','33000','Bordeaux','France',3,'car',1,'report','https://picsum.photos/seed/Ft7Bw2HnL/640/480','2024-08-20 11:43:14.012','2024-08-20 11:43:14.012','clz85f52q0000r0yvqexm6ltm','0303732c-5663-40de-8d21-06e091fe98ba','75861639-dffe-426b-a638-bf7f5a0154f1'),('cm03h0ryg00002sygpp9tdaa8','Nouvelle annonce','Ma nouvelle annonce','2024-09-10 14:00:00','2024-09-10 15:00:00',8,'10 rue nationale','37400','Amboise','France',4,'car',1,'report','https://loremflickr.com/640/480?lock=6057826264362','2024-08-21 06:26:38.262','2024-08-21 06:26:38.262','clz85f52q0000r0yvqexm6ltm','3474fc6e-1929-41fe-9216-575dfbe99b96','c867d414-92c2-4528-b21d-f364a642e972'),('cm03hfy26000083okiw44cqdx','Ma nouvelle annonce','Ma description','2024-10-22 10:00:00','2024-10-22 12:00:00',8,'6 rue Jean Jaur├¿s','86000','Poitiers','France',2,'car',1,'report','https://picsum.photos/seed/YhN7UcZ/640/480','2024-08-21 06:38:26.015','2024-08-21 06:38:26.015','clz85f52q0000r0yvqexm6ltm','d6732b55-c80e-444d-a4bb-28164f81feeb','2fdf892c-70c8-48cf-bfcc-25787b68be8d'),('e03e09e7-6f6f-4405-ace7-d29cb522ea54','inventore ut architecto nobis quo','Reiciendis voluptate rem. Eius voluptatum ipsum dolore quis eius accusantium. Alias quo aspernatur perspiciatis.','2024-11-27 23:55:01','2024-11-28 00:55:01',1,'5 Place de la Huchette','08231','Besan├ºon','France',64,'car',1,'report','https://loremflickr.com/640/480?lock=6052586870276','2024-07-28 11:19:38.680','2024-07-28 11:19:38.680','6b822864-6bba-4414-a89e-8d259604ff92','d6732b55-c80e-444d-a4bb-28164f81feeb','c0b52e20-38be-4935-a8bf-b1518a7694a0'),('e23432a2-8649-41b5-bb2f-f99f6275952e','accusamus corrupti explicabo aspernatur commodi','Architecto nisi illo numquam quas maiores. Repudiandae atque explicabo vitae molestias totam at quasi dolores soluta. Nemo sequi corrupti delectus aut laboriosam illum non.','2024-08-21 07:18:31','2024-08-21 08:18:31',1,'691 Voie Royale','45753','Le Havre','France',58,'car',1,'cancel','https://picsum.photos/seed/PYqLuB/640/480','2024-07-28 11:19:37.303','2024-07-28 11:19:37.303','ef6612b2-b54d-45c0-8530-0fcb6a622ed5','0303732c-5663-40de-8d21-06e091fe98ba','c867d414-92c2-4528-b21d-f364a642e972'),('ed39e8af-649c-477c-9e63-39b6fb0380c5','molestias tenetur minus provident dolore','Magnam dignissimos officiis libero at quod accusantium quibusdam. Laboriosam omnis fugit ullam repudiandae quidem cupiditate distinctio animi iusto. Exercitationem corporis adipisci quo recusandae expedita saepe eveniet tempora.','2025-07-13 07:29:45','2025-07-13 08:29:45',1,'679 Quai de Provence','54082','Tours','France',79,'car',0,'report','https://picsum.photos/seed/O0eRaWstR/640/480','2024-07-28 11:19:38.116','2024-07-28 11:19:38.116','5a56cd3c-c761-4e58-a9ed-48e1604cf63c','0303732c-5663-40de-8d21-06e091fe98ba','29555c5c-bd85-47af-bb66-a33224f78a92'),('fa4c9edd-0f41-4ce3-856e-8c453f7c4a71','eos vel error ab officiis','Tenetur corporis illum. Est sequi voluptatem possimus deleniti totam atque dignissimos odit tenetur. Labore provident magnam.','2025-04-20 13:00:30','2025-04-20 14:00:30',1,'1 Boulevard de la Huchette','76714','Ajaccio','France',50,'van',0,'report','https://loremflickr.com/640/480?lock=3206359761813','2024-07-28 11:19:36.993','2024-07-28 11:19:36.993','4243a065-43b9-4b4f-a82e-9ed675eccf5f','0303732c-5663-40de-8d21-06e091fe98ba','a370e963-4783-47f4-8a92-f8306b2c06f2'),('fdcfd614-fda5-46e1-bee1-2c99b16ea595','harum aut numquam perspiciatis ad','Praesentium quis in quasi. Nulla laborum odit. Ipsam maiores culpa voluptatum voluptate placeat illum vitae dignissimos rerum.','2025-07-08 13:08:54','2025-07-08 14:08:54',1,'42 Rue de Nesle','31064','Le Tampon','France',84,'van',0,'report','https://picsum.photos/seed/3VnDgaNT1/640/480','2024-07-28 11:19:38.143','2024-07-28 11:19:38.143','5a56cd3c-c761-4e58-a9ed-48e1604cf63c','8bc94900-4574-4db7-8b3f-c84d561636b2','c0b52e20-38be-4935-a8bf-b1518a7694a0');
/*!40000 ALTER TABLE `Ad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AdHasFile`
--

DROP TABLE IF EXISTS `AdHasFile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AdHasFile` (
  `adId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`adId`,`fileId`),
  KEY `file_id` (`fileId`),
  CONSTRAINT `AdHasFile_adId_fkey` FOREIGN KEY (`adId`) REFERENCES `Ad` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `AdHasFile_fileId_fkey` FOREIGN KEY (`fileId`) REFERENCES `File` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AdHasFile`
--

LOCK TABLES `AdHasFile` WRITE;
/*!40000 ALTER TABLE `AdHasFile` DISABLE KEYS */;
INSERT INTO `AdHasFile` VALUES ('e23432a2-8649-41b5-bb2f-f99f6275952e','00b2b6f7-1d74-4633-b031-b9f9749767bf'),('31e2949f-2244-42d2-8c23-8b95066a1037','04f72307-eb5e-40c6-8216-e069d72bf0ed'),('64f54f3f-b540-4c20-9ab5-c3d46bc8c228','0706079f-75aa-4fd9-84d5-40502041af22'),('3aabb5bd-4cf0-4631-abf7-18d3512e3208','11d21d60-f804-4a2b-b8e7-51cacb9e5929'),('8edda21e-4a45-41e8-86bb-1442a2e33cfa','1ad366e8-48d9-42df-ad6d-26fb07dd4540'),('31e2949f-2244-42d2-8c23-8b95066a1037','1cbea3b6-0b43-4f0c-bba4-7022ee7281b4'),('bcf27f4e-8a0c-4d84-980e-8d55b71257a8','1e805a1b-780e-43af-9d95-cc1a110f70c0'),('1b4e2ad2-2523-40d5-bcc9-ea7f2fc9eed6','228ee916-00a8-44b6-a48a-9523dd17a845'),('c80b1c04-c7cb-41df-91bf-9ca17cbf74a3','23d5fce4-6986-4b6a-aae9-7a6658133ad8'),('ce07fc33-f3a6-43e9-9b00-5728d9a93674','26f4fad2-7c37-4e52-8277-ca0547e28ede'),('8a3a3905-75b1-408c-857c-70cdb18bf6ef','2cc65c5a-c89c-4725-ac5a-3cba90c69350'),('1f4d5317-456a-46e4-ad67-7906d8297f47','2ed3472a-0e23-4875-8bad-e7006d5f6984'),('381fcfa7-1d3c-4b68-b02f-f2cb044269cf','31d4afd7-8bb1-4305-8263-0020f4d2919d'),('8a3a3905-75b1-408c-857c-70cdb18bf6ef','390767e7-eb80-4bae-beda-48f363a6b437'),('784f7217-f377-430e-ad28-09c19e4f62d1','3b5bf29f-0943-4b29-941a-54f9fd2e301c'),('36ed1ee4-f3ef-41d1-8724-62f07f128cca','3cc07027-e6ee-4be8-b727-dd8220427ef5'),('784f7217-f377-430e-ad28-09c19e4f62d1','40fad59f-0c19-4e8e-8b05-d43e0add9076'),('787bc86f-83fb-4954-9f0b-34ab3b8b6e83','41b01d0e-9f49-41b2-8288-cd5ab984bcaf'),('fdcfd614-fda5-46e1-bee1-2c99b16ea595','43981a62-ce8e-43a6-ade0-8ba7c4d31b26'),('787bc86f-83fb-4954-9f0b-34ab3b8b6e83','4f99602d-7066-4503-b1d7-0b51fb07b186'),('cb0ab886-0930-4d12-925e-ee230974d83f','532a9149-12b9-4906-9610-991fdbfa1aa5'),('c48fb03f-c7cb-4a92-a5b3-2148abf4ca53','55ed1cf8-2708-43eb-8879-3bdc0cd706d1'),('e23432a2-8649-41b5-bb2f-f99f6275952e','596726a6-8f3f-44bf-a315-a2d66cf107fe'),('fa4c9edd-0f41-4ce3-856e-8c453f7c4a71','5a589edc-dfd6-4709-ad79-023dcdf7a6eb'),('cfb97578-72c2-45a7-a3ec-640f54769e73','61e62417-f859-4886-8294-4d5357eb4afa'),('ce07fc33-f3a6-43e9-9b00-5728d9a93674','63a96253-70d3-4478-9555-bac5fd9872a2'),('cb0ab886-0930-4d12-925e-ee230974d83f','662a5c93-a2ab-408c-8d45-48a196f72fcd'),('64f54f3f-b540-4c20-9ab5-c3d46bc8c228','68a8e0c3-5224-4b06-b9c3-97ba59dee0fd'),('2f64d8a9-b080-4770-9312-8a33e2dba153','6a25a9e0-5ed3-4208-bab0-a7a833816ca4'),('e03e09e7-6f6f-4405-ace7-d29cb522ea54','6e64d0eb-7073-431e-a573-eaa9161fed55'),('fdcfd614-fda5-46e1-bee1-2c99b16ea595','740700ee-313b-48fb-aac6-5b3f492a9471'),('221bf653-c603-4c9e-bc84-0beec65e7602','78d94fec-000d-42fe-90b0-d4183e1b4248'),('c4a3dfda-83ff-4a76-998a-a4858d5023b5','7b83967e-e60a-4f92-9595-0c9352a81550'),('fa4c9edd-0f41-4ce3-856e-8c453f7c4a71','7c4fd6b9-95f0-42a4-9a80-1dc4f8a6f9c4'),('2f64d8a9-b080-4770-9312-8a33e2dba153','7ed22c36-a3d9-45f6-be73-a9fcaefc5af3'),('ed39e8af-649c-477c-9e63-39b6fb0380c5','7efe8006-3adc-43d0-b393-722680ba1431'),('ed39e8af-649c-477c-9e63-39b6fb0380c5','801492a1-72d7-418e-aa3c-b27bb003200e'),('c80b1c04-c7cb-41df-91bf-9ca17cbf74a3','8831152b-cc7c-4649-850e-eccb489e2d45'),('381fcfa7-1d3c-4b68-b02f-f2cb044269cf','8d2fe106-ede3-42f3-aeec-6822af355838'),('516350bf-6e67-4e0f-827e-962f7b430993','918854a2-bbde-4bc8-8613-a8e31d70cbdc'),('221bf653-c603-4c9e-bc84-0beec65e7602','9b09328a-0271-4e96-a6d7-969efc8b1e58'),('37067192-6094-401f-9456-0148025ac166','9c6efd54-b7a1-452c-8878-a7e303d81d66'),('1f1783df-490b-4c3c-97ca-4f03746a53a3','a4488119-677c-4dac-b392-5b80c15587d5'),('bcf27f4e-8a0c-4d84-980e-8d55b71257a8','a47ccdaa-46b2-4c77-931a-429c98cb9660'),('e03e09e7-6f6f-4405-ace7-d29cb522ea54','a6e73913-d920-4cf9-8536-4a1bef5074ba'),('75af7a14-50d6-4aca-ba87-3b279b09c5f8','b00dcdea-a682-45a6-bb9d-2c742cfa0239'),('c48fb03f-c7cb-4a92-a5b3-2148abf4ca53','bbc5ad5e-2b60-4d48-8c84-5829ca648926'),('1f4d5317-456a-46e4-ad67-7906d8297f47','bf8a5fff-20d3-4bb7-8be0-fb4099e54d87'),('cfb97578-72c2-45a7-a3ec-640f54769e73','c747b234-cc0d-4948-88bd-43a9d5ecb534'),('c0e80b5e-dbe7-427a-ba1c-cd652fea1551','c785c150-4489-4198-a7d8-a3fcca977fbf'),('1b4e2ad2-2523-40d5-bcc9-ea7f2fc9eed6','d347632e-62ff-4f47-9bec-ded7b8be1e16'),('3aabb5bd-4cf0-4631-abf7-18d3512e3208','d51af64b-9bbf-4178-bc2e-c21617bbb5e2'),('8edda21e-4a45-41e8-86bb-1442a2e33cfa','da4bd72e-2860-45a2-aa1b-ae11e7bb7390'),('516350bf-6e67-4e0f-827e-962f7b430993','dac6e4ea-25d3-46e5-bd50-ee022f19dcff'),('75af7a14-50d6-4aca-ba87-3b279b09c5f8','dd19666f-34e6-4fdf-98a5-f27bfe1d75bd'),('36ed1ee4-f3ef-41d1-8724-62f07f128cca','e0ceb6db-3957-4052-8e36-38778aca41e4'),('c0e80b5e-dbe7-427a-ba1c-cd652fea1551','e124ff3b-fd4e-434a-b478-1a40b155abe8'),('1f1783df-490b-4c3c-97ca-4f03746a53a3','ed77051e-c26a-4b41-bad8-33168fe3d590'),('37067192-6094-401f-9456-0148025ac166','f62031c4-dab7-4db6-9129-6e623df4625a'),('c4a3dfda-83ff-4a76-998a-a4858d5023b5','fe16a485-9e8b-467d-bc17-2615594baf53');
/*!40000 ALTER TABLE `AdHasFile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES ('0303732c-5663-40de-8d21-06e091fe98ba','Garderie','2024-07-28 11:19:36.245','2024-07-28 11:19:36.245'),('3474fc6e-1929-41fe-9216-575dfbe99b96','Sortie','2024-07-28 11:19:36.255','2024-07-28 11:19:36.255'),('8bc94900-4574-4db7-8b3f-c84d561636b2','Covoiturage','2024-07-28 11:19:36.218','2024-07-28 11:19:36.218'),('d6732b55-c80e-444d-a4bb-28164f81feeb','Soutien','2024-07-28 11:19:36.235','2024-07-28 11:19:36.235');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Child`
--

DROP TABLE IF EXISTS `Child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Child` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `school` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `class` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Child`
--

LOCK TABLES `Child` WRITE;
/*!40000 ALTER TABLE `Child` DISABLE KEYS */;
INSERT INTO `Child` VALUES ('3083237f-d0ef-4218-92ad-5c92088641f3','Aube','Baron','├ëpicerie','C','2024-07-28 11:19:36.342','2024-07-28 11:19:36.342'),('53045d7d-58fe-4c47-982c-a06d52ae4a93','Christine','Simon','Jardin','B','2024-07-28 11:19:36.342','2024-07-28 11:19:36.342'),('6a184bb8-c12f-4829-bea0-82a16cf2e8e6','Ysaline','Renault','Outils','A','2024-07-28 11:19:36.343','2024-07-28 11:19:36.343'),('a0dd5409-139b-4705-b547-5edcb5721ef4','Angoustan','Bonnet','Jardin','A','2024-07-28 11:19:36.342','2024-07-28 11:19:36.342'),('eae340fa-8a77-4c8c-9727-ec2b6300b62a','G├®d├®on','Lopez','B├®b├®','A','2024-07-28 11:19:36.342','2024-07-28 11:19:36.342');
/*!40000 ALTER TABLE `Child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `File`
--

DROP TABLE IF EXISTS `File`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `File` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filePath` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fileType` enum('jpg','png') COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`userId`),
  CONSTRAINT `File_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `File`
--

LOCK TABLES `File` WRITE;
/*!40000 ALTER TABLE `File` DISABLE KEYS */;
INSERT INTO `File` VALUES ('00b2b6f7-1d74-4633-b031-b9f9749767bf','/usr/bin/ensuite_de_peur_que.htm','jpg','2024-07-28 11:19:37.378','2024-07-28 11:19:37.378','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('04f72307-eb5e-40c6-8216-e069d72bf0ed','/selinux/plouf_doucement_adorable.text','jpg','2024-07-28 11:19:39.001','2024-07-28 11:19:39.001','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0'),('0706079f-75aa-4fd9-84d5-40502041af22','/sys/aggraver.shtml','png','2024-07-28 11:19:38.720','2024-07-28 11:19:38.720','6b822864-6bba-4414-a89e-8d259604ff92'),('11d21d60-f804-4a2b-b8e7-51cacb9e5929','/var/mail/groin_groin.def','jpg','2024-07-28 11:19:37.675','2024-07-28 11:19:37.675','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('1ad366e8-48d9-42df-ad6d-26fb07dd4540','/Library/__travers_adversaire.xlt','jpg','2024-07-28 11:19:37.323','2024-07-28 11:19:37.323','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('1cbea3b6-0b43-4f0c-bba4-7022ee7281b4','/boot/de_crainte_que.vsw','png','2024-07-28 11:19:39.001','2024-07-28 11:19:39.001','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0'),('1e805a1b-780e-43af-9d95-cc1a110f70c0','/lost+found/adepte.jpeg','jpg','2024-07-28 11:19:37.351','2024-07-28 11:19:37.351','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('228ee916-00a8-44b6-a48a-9523dd17a845','/usr/direction__quipe_de_recherche_broum.3gp','jpg','2024-07-28 11:19:36.766','2024-07-28 11:19:36.766','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('23d5fce4-6986-4b6a-aae9-7a6658133ad8','/opt/lib/broum.dms','jpg','2024-07-28 11:19:38.694','2024-07-28 11:19:38.694','6b822864-6bba-4414-a89e-8d259604ff92'),('26f4fad2-7c37-4e52-8277-ca0547e28ede','/home/user/oser.distz','jpg','2024-07-28 11:19:37.069','2024-07-28 11:19:37.069','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('2cc65c5a-c89c-4725-ac5a-3cba90c69350','/mnt/secouriste.jpeg','jpg','2024-07-28 11:19:38.493','2024-07-28 11:19:38.493','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('2ed3472a-0e23-4875-8bad-e7006d5f6984','/opt/au_prix_de___bas_de.wav','jpg','2024-07-28 11:19:36.446','2024-07-28 11:19:36.446','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('31d4afd7-8bb1-4305-8263-0020f4d2919d','/usr/obj/au_cas_o_.exe','jpg','2024-07-28 11:19:37.918','2024-07-28 11:19:37.918','8b468fba-8193-495b-b9b8-f412b974fa28'),('390767e7-eb80-4bae-beda-48f363a6b437','/sbin/d_penser.mp4','png','2024-07-28 11:19:38.493','2024-07-28 11:19:38.493','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('3b5bf29f-0943-4b29-941a-54f9fd2e301c','/etc/namedb/sinc_re_triathl_te_paf.xla','png','2024-07-28 11:19:38.465','2024-07-28 11:19:38.465','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('3cc07027-e6ee-4be8-b727-dd8220427ef5','/var/adversaire_au_dehors__a.mpe','png','2024-07-28 11:19:38.182','2024-07-28 11:19:38.182','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('40fad59f-0c19-4e8e-8b05-d43e0add9076','/var/tmp/tellement.mp2a','png','2024-07-28 11:19:38.465','2024-07-28 11:19:38.465','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('41b01d0e-9f49-41b2-8288-cd5ab984bcaf','/usr/libdata/main_d__uvre_apr_s_que.bin','jpg','2024-07-28 11:19:37.891','2024-07-28 11:19:37.891','8b468fba-8193-495b-b9b8-f412b974fa28'),('43981a62-ce8e-43a6-ade0-8ba7c4d31b26','/srv/d_autant_que.tiff','jpg','2024-07-28 11:19:38.211','2024-07-28 11:19:38.211','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('4f99602d-7066-4503-b1d7-0b51fb07b186','/private/var/encore_lectorat.bin','png','2024-07-28 11:19:37.891','2024-07-28 11:19:37.891','8b468fba-8193-495b-b9b8-f412b974fa28'),('532a9149-12b9-4906-9610-991fdbfa1aa5','/usr/local/bin/porte_parole.in','jpg','2024-07-28 11:19:37.644','2024-07-28 11:19:37.644','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('55ed1cf8-2708-43eb-8879-3bdc0cd706d1','/usr/src/d_autant_que.mjs','jpg','2024-07-28 11:19:38.949','2024-07-28 11:19:38.949','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0'),('596726a6-8f3f-44bf-a315-a2d66cf107fe','/usr/include/pr_s_de.mp3','jpg','2024-07-28 11:19:37.378','2024-07-28 11:19:37.378','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('5a589edc-dfd6-4709-ad79-023dcdf7a6eb','/etc/mail/certes_avant_hier.7z','png','2024-07-28 11:19:37.039','2024-07-28 11:19:37.039','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('61e62417-f859-4886-8294-4d5357eb4afa','/var/spool/autour_de.css','jpg','2024-07-28 11:19:36.736','2024-07-28 11:19:36.736','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('63a96253-70d3-4478-9555-bac5fd9872a2','/usr/_mettre_croire_bof.xht','jpg','2024-07-28 11:19:37.069','2024-07-28 11:19:37.069','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('662a5c93-a2ab-408c-8d45-48a196f72fcd','/usr/include/cocorico_foule_forcer.ttf','png','2024-07-28 11:19:37.644','2024-07-28 11:19:37.644','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('68a8e0c3-5224-4b06-b9c3-97ba59dee0fd','/usr/local/bin/fourbe_infime.msi','png','2024-07-28 11:19:38.720','2024-07-28 11:19:38.720','6b822864-6bba-4414-a89e-8d259604ff92'),('6a25a9e0-5ed3-4208-bab0-a7a833816ca4','/Applications/pour_que_puisque_grossir.htm','jpg','2024-07-28 11:19:38.438','2024-07-28 11:19:38.438','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('6e64d0eb-7073-431e-a573-eaa9161fed55','/usr/local/bin/autant.mpg','png','2024-07-28 11:19:38.749','2024-07-28 11:19:38.749','6b822864-6bba-4414-a89e-8d259604ff92'),('740700ee-313b-48fb-aac6-5b3f492a9471','/proc/transporter_de___lectorat.pot','png','2024-07-28 11:19:38.211','2024-07-28 11:19:38.211','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('78d94fec-000d-42fe-90b0-d4183e1b4248','/usr/ports/ensemble__largir.dms','png','2024-07-28 11:19:36.483','2024-07-28 11:19:36.483','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('7b83967e-e60a-4f92-9595-0c9352a81550','/etc/namedb/gestionnaire.jpe','png','2024-07-28 11:19:38.976','2024-07-28 11:19:38.976','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0'),('7c4fd6b9-95f0-42a4-9a80-1dc4f8a6f9c4','/var/fusiller_super_parce_que.pkg','jpg','2024-07-28 11:19:37.039','2024-07-28 11:19:37.039','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('7ed22c36-a3d9-45f6-be73-a9fcaefc5af3','/var/mail/_largir_membre_du_personnel___force_de.m2a','png','2024-07-28 11:19:38.438','2024-07-28 11:19:38.438','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('7efe8006-3adc-43d0-b393-722680ba1431','/sys/communaut___tudiante.text','jpg','2024-07-28 11:19:38.156','2024-07-28 11:19:38.156','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('801492a1-72d7-418e-aa3c-b27bb003200e','/etc/dissoudre.jsonld','png','2024-07-28 11:19:38.156','2024-07-28 11:19:38.156','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('8831152b-cc7c-4649-850e-eccb489e2d45','/usr/share/combattre.pptx','jpg','2024-07-28 11:19:38.694','2024-07-28 11:19:38.694','6b822864-6bba-4414-a89e-8d259604ff92'),('8d2fe106-ede3-42f3-aeec-6822af355838','/opt/bin/autour_de.ogv','png','2024-07-28 11:19:37.918','2024-07-28 11:19:37.918','8b468fba-8193-495b-b9b8-f412b974fa28'),('918854a2-bbde-4bc8-8613-a8e31d70cbdc','/home/user/soit_vouh.dot','jpg','2024-07-28 11:19:37.613','2024-07-28 11:19:37.613','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('9b09328a-0271-4e96-a6d7-969efc8b1e58','/Applications/malgr_.avif','png','2024-07-28 11:19:36.483','2024-07-28 11:19:36.483','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('9c6efd54-b7a1-452c-8878-a7e303d81d66','/usr/bin/commissionnaire_paf_si.woff','png','2024-07-28 11:19:36.794','2024-07-28 11:19:36.794','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('a4488119-677c-4dac-b392-5b80c15587d5','/usr/share/perplexe_touriste_tant_que.png','jpg','2024-07-28 11:19:36.510','2024-07-28 11:19:36.510','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('a47ccdaa-46b2-4c77-931a-429c98cb9660','/lost+found/parler_jeune_enfant_ouah.mp2','jpg','2024-07-28 11:19:37.351','2024-07-28 11:19:37.351','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('a6e73913-d920-4cf9-8536-4a1bef5074ba','/etc/defaults/associer_chut_grrr.in','png','2024-07-28 11:19:38.749','2024-07-28 11:19:38.749','6b822864-6bba-4414-a89e-8d259604ff92'),('b00dcdea-a682-45a6-bb9d-2c742cfa0239','/mnt/reculer_bon_direction.dmg','jpg','2024-07-28 11:19:37.096','2024-07-28 11:19:37.096','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('bbc5ad5e-2b60-4d48-8c84-5829ca648926','/usr/obj/en_face_de_efficace.docx','png','2024-07-28 11:19:38.948','2024-07-28 11:19:38.948','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0'),('bf8a5fff-20d3-4bb7-8be0-fb4099e54d87','/net/frotter_insuffisamment_porte_parole.rng','jpg','2024-07-28 11:19:36.445','2024-07-28 11:19:36.445','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('c747b234-cc0d-4948-88bd-43a9d5ecb534','/dev/sinc_re.so','png','2024-07-28 11:19:36.736','2024-07-28 11:19:36.736','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('c785c150-4489-4198-a7d8-a3fcca977fbf','/usr/include/clac_pin_pon___l__gard_de.html','png','2024-07-28 11:19:37.944','2024-07-28 11:19:37.944','8b468fba-8193-495b-b9b8-f412b974fa28'),('d347632e-62ff-4f47-9bec-ded7b8be1e16','/proc/calme_ha_hausser.tif','png','2024-07-28 11:19:36.767','2024-07-28 11:19:36.767','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('d51af64b-9bbf-4178-bc2e-c21617bbb5e2','/lib/pin_pon_dans_la_mesure_o__lors_de.avi','jpg','2024-07-28 11:19:37.676','2024-07-28 11:19:37.676','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('da4bd72e-2860-45a2-aa1b-ae11e7bb7390','/usr/libdata/antagoniste_depuis.spx','png','2024-07-28 11:19:37.323','2024-07-28 11:19:37.323','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('dac6e4ea-25d3-46e5-bd50-ee022f19dcff','/opt/lib/cependant_par_rapport__.xla','png','2024-07-28 11:19:37.613','2024-07-28 11:19:37.613','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('dd19666f-34e6-4fdf-98a5-f27bfe1d75bd','/mnt/puisque_agr_able.dms','png','2024-07-28 11:19:37.096','2024-07-28 11:19:37.096','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('e0ceb6db-3957-4052-8e36-38778aca41e4','/Library/plouf_jusqu___ce_que_s_culaire.kar','png','2024-07-28 11:19:38.182','2024-07-28 11:19:38.182','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('e124ff3b-fd4e-434a-b478-1a40b155abe8','/dev/hier_oh_ouch.vss','jpg','2024-07-28 11:19:37.944','2024-07-28 11:19:37.944','8b468fba-8193-495b-b9b8-f412b974fa28'),('ed77051e-c26a-4b41-bad8-33168fe3d590','/etc/defaults/membre_titulaire_secouriste.midi','png','2024-07-28 11:19:36.510','2024-07-28 11:19:36.510','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('f62031c4-dab7-4db6-9129-6e623df4625a','/private/tmp/alors_que_diplomate_commissionnaire.mid','png','2024-07-28 11:19:36.794','2024-07-28 11:19:36.794','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('fe16a485-9e8b-467d-bc17-2615594baf53','/bin/du_c_t__de_de_fa_on_que.gif','jpg','2024-07-28 11:19:38.976','2024-07-28 11:19:38.976','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0');
/*!40000 ALTER TABLE `File` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Message`
--

DROP TABLE IF EXISTS `Message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Message` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conform` tinyint(1) DEFAULT NULL,
  `relatedEntityId` int DEFAULT NULL,
  `relatedEntityType` enum('ad','user_group') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`userId`),
  CONSTRAINT `Message_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Message`
--

LOCK TABLES `Message` WRITE;
/*!40000 ALTER TABLE `Message` DISABLE KEYS */;
INSERT INTO `Message` VALUES ('06eecd63-2c84-4e49-902e-429f8db20b60','eos nulla delectus eos quae',0,NULL,NULL,'2024-07-28 11:19:36.825','2024-07-28 11:19:36.825','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('29809505-80fb-48be-bcfa-dcfddd3ce917','odio aliquam temporibus possimus et',0,NULL,NULL,'2024-07-28 11:19:37.411','2024-07-28 11:19:37.411','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('2d0cf182-c1cb-4ff5-8354-4cc84add31f3','iure ipsam odio pariatur laboriosam',0,NULL,NULL,'2024-07-28 11:19:38.775','2024-07-28 11:19:38.775','6b822864-6bba-4414-a89e-8d259604ff92'),('34037291-77a8-43ad-adb4-e69f3307d617','quas ea itaque ab accusantium',0,NULL,NULL,'2024-07-28 11:19:37.704','2024-07-28 11:19:37.704','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('3eb19bea-1449-4a22-922d-ab3b8fac4e24','ipsum ex doloribus repellendus praesentium',0,NULL,NULL,'2024-07-28 11:19:37.704','2024-07-28 11:19:37.704','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('477c62e8-dd24-4ec1-9e94-24d3bbc359cf','autem quis quod nobis et',0,NULL,NULL,'2024-07-28 11:19:36.824','2024-07-28 11:19:36.824','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('48cf9914-1731-4263-949f-853e7ac60348','laboriosam placeat repellendus assumenda eius',1,NULL,NULL,'2024-07-28 11:19:39.027','2024-07-28 11:19:39.027','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0'),('606169be-5b27-4839-affa-9dfda4259bf1','tenetur quaerat dolorum quidem earum',1,NULL,NULL,'2024-07-28 11:19:36.539','2024-07-28 11:19:36.539','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('648caa9e-e85c-4611-afb2-1e7af5a26ade','nesciunt expedita quibusdam aperiam sunt',1,NULL,NULL,'2024-07-28 11:19:36.824','2024-07-28 11:19:36.824','58db9331-51bd-4dc2-b470-6f9a1afd2965'),('65bc3e48-1544-4f09-ad04-70801ebb7331','porro voluptates dolorum nobis officiis',1,NULL,NULL,'2024-07-28 11:19:37.122','2024-07-28 11:19:37.122','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('6dfab495-0c93-4054-a13d-27be39b65a37','cumque quidem rerum excepturi perspiciatis',1,NULL,NULL,'2024-07-28 11:19:38.245','2024-07-28 11:19:38.245','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('8e8c1534-5147-47ad-98fa-8cd88cb9e51a','inventore corrupti explicabo totam accusamus',0,NULL,NULL,'2024-07-28 11:19:38.245','2024-07-28 11:19:38.245','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('9b6b6e3a-7741-4afe-acbe-47641ca26be0','voluptate aspernatur sequi excepturi repudiandae',0,NULL,NULL,'2024-07-28 11:19:37.411','2024-07-28 11:19:37.411','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('a9a59792-1a1f-4b05-a0d0-8e8cd429de1a','aliquid molestias perspiciatis porro eius',0,NULL,NULL,'2024-07-28 11:19:38.518','2024-07-28 11:19:38.518','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('ab632edc-ec9d-46aa-8214-297e15c4396e','facilis exercitationem eum assumenda corrupti',1,NULL,NULL,'2024-07-28 11:19:36.539','2024-07-28 11:19:36.539','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('b3ec6561-f992-4328-b633-ec45cfbc1626','earum quasi expedita quam eum',0,NULL,NULL,'2024-07-28 11:19:38.775','2024-07-28 11:19:38.775','6b822864-6bba-4414-a89e-8d259604ff92'),('b4ec041a-e14a-4564-ac9a-fa198cbed90a','aliquam veritatis perspiciatis eos eos',1,NULL,NULL,'2024-07-28 11:19:38.775','2024-07-28 11:19:38.775','6b822864-6bba-4414-a89e-8d259604ff92'),('ba7f6d8b-55c8-4c8c-8372-1afe10cff62f','aperiam tenetur aliquid magni illo',0,NULL,NULL,'2024-07-28 11:19:38.518','2024-07-28 11:19:38.518','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('bf3c75f6-39f7-4c1c-a2ad-0b1666530d0c','sed maiores corporis similique aliquam',0,NULL,NULL,'2024-07-28 11:19:36.539','2024-07-28 11:19:36.539','27da5ab9-116a-4e32-afc6-e960419c2fb0'),('c25315ca-2f8b-4e32-b665-68eda275f726','optio reprehenderit magni perspiciatis sed',1,NULL,NULL,'2024-07-28 11:19:37.971','2024-07-28 11:19:37.971','8b468fba-8193-495b-b9b8-f412b974fa28'),('c9df4858-cdde-4397-8382-e7c4574bc5e9','aliquam cumque quasi qui repellat',0,NULL,NULL,'2024-07-28 11:19:37.704','2024-07-28 11:19:37.704','e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f'),('cc731958-a708-4efd-b99d-56236028bddf','repellendus dignissimos ratione illo quidem',1,NULL,NULL,'2024-07-28 11:19:39.027','2024-07-28 11:19:39.027','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0'),('d22492c8-905e-413d-92a4-168806a14356','quaerat corrupti recusandae temporibus nemo',1,NULL,NULL,'2024-07-28 11:19:38.518','2024-07-28 11:19:38.518','1dbd02ce-25fb-4932-8fea-b9f54c943e99'),('d81f4171-da59-4c34-bfef-5e61b8ab2491','nemo maxime saepe numquam exercitationem',1,NULL,NULL,'2024-07-28 11:19:37.971','2024-07-28 11:19:37.971','8b468fba-8193-495b-b9b8-f412b974fa28'),('dc809af8-709d-48ef-8636-27bec4357155','ex pariatur sapiente cum quis',1,NULL,NULL,'2024-07-28 11:19:38.245','2024-07-28 11:19:38.245','5a56cd3c-c761-4e58-a9ed-48e1604cf63c'),('e6a43ba5-7c19-4f13-8cdb-6f7f0e378d09','in fugit dicta mollitia optio',1,NULL,NULL,'2024-07-28 11:19:37.122','2024-07-28 11:19:37.122','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('eb5b1d8b-bde2-4925-8286-c060c0ed0a91','nisi perferendis delectus voluptates quas',0,NULL,NULL,'2024-07-28 11:19:37.971','2024-07-28 11:19:37.971','8b468fba-8193-495b-b9b8-f412b974fa28'),('edebf744-225e-49b9-847e-0d266fcf0dcd','saepe commodi in voluptatibus possimus',1,NULL,NULL,'2024-07-28 11:19:37.411','2024-07-28 11:19:37.411','ef6612b2-b54d-45c0-8530-0fcb6a622ed5'),('fc969b98-599f-4f19-9986-77baf36b5d5f','dignissimos sint nihil in occaecati',0,NULL,NULL,'2024-07-28 11:19:37.122','2024-07-28 11:19:37.122','4243a065-43b9-4b4f-a82e-9ed675eccf5f'),('ff553455-689f-4e1d-9794-1041f5248416','alias deleniti sint autem praesentium',0,NULL,NULL,'2024-07-28 11:19:39.027','2024-07-28 11:19:39.027','15d8af14-ac78-4c3f-b3b2-09fb895ea8b0');
/*!40000 ALTER TABLE `Message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profile`
--

DROP TABLE IF EXISTS `Profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Profile` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postalCode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profilePicture` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Profile_userId_key` (`userId`),
  UNIQUE KEY `Profile_id_userId_key` (`id`,`userId`),
  CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profile`
--

LOCK TABLES `Profile` WRITE;
/*!40000 ALTER TABLE `Profile` DISABLE KEYS */;
INSERT INTO `Profile` VALUES ('1c186668-f09c-4498-9ffb-5d7e71504b47','+33 698067329','Rouen','97117','3 Impasse de Nesle','https://avatars.githubusercontent.com/u/56097235','2024-07-28 11:19:36.382','2024-07-28 11:19:36.382','clz5j1q170000zndqhohko58o'),('24c56eae-824c-4592-a096-773d96e50d8c','+33 456599200','Saint-Pierre','00821','8617 Avenue des Lombards','https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGV','2024-07-28 11:19:36.685','2024-07-28 11:19:36.685','clz5j7yc5000061qznrp3zw26'),('57da46be-f324-4e77-897f-d102b785cb05','+33 339715081','Marseille','63899','275 Boulevard de la Huchette','https://avatars.githubusercontent.com/u/60739706','2024-07-28 11:19:37.837','2024-07-28 11:19:37.837','clz5r2oaj00005jsb3i5v1ib7'),('83035536-7d7f-4da4-9ad6-2451b5a18936','+33 443728533','Antibes','54390','3 Voie du Havre','https://avatars.githubusercontent.com/u/40131994','2024-07-28 11:19:37.258','2024-07-28 11:19:37.258','clz5s0jhs0000njj1h4pt0rvx'),('ce79762f-e523-4d38-8357-355b4d2c4540','+33 150848799','Beauvais','71322','8 Rue des Lombards','https://avatars.githubusercontent.com/u/36050578','2024-07-28 11:19:36.975','2024-07-28 11:19:36.975','clz5smyeu0000mc8dqpzazq2n'),('d7b0410c-825f-48f6-9354-ee88642a3ecf','0733256192','Hy├¿res','47132','3930 Impasse Adolphe Mille','https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGV','2024-07-28 11:19:38.384','2024-07-28 11:19:38.384','clz5t0j5y0000u37tmsjj181y'),('f43d6880-1378-4575-a307-cde18e23925d','0329018419','Issy-les-Moulineaux','12242','128 Avenue Mouffetard','https://avatars.githubusercontent.com/u/99776782','2024-07-28 11:19:38.898','2024-07-28 11:19:38.898','clz5ualo20000tma59vzoxx43'),('f7df462b-1cf2-46b8-a8b7-55c835ffa630','+33 306526195','Le Mans','17114','8555 Passage du Faubourg-Saint-Denis','https://avatars.githubusercontent.com/u/47774437','2024-07-28 11:19:38.642','2024-07-28 11:19:38.642','clz79f9ds0000787o71tlgfyc'),('f920c00e-433c-4da4-8926-420b7443e40a','0288111326','Ajaccio','41876','5 Avenue Pierre Charron','https://avatars.githubusercontent.com/u/32632492','2024-07-28 11:19:38.104','2024-07-28 11:19:38.104','clz7adnns000011199omcwv8z'),('f9bed5fb-eea3-4b7f-a1ab-781e628445d4','+33 797297942','Toulon','81236','57 Quai Joubert','https://avatars.githubusercontent.com/u/80961162','2024-07-28 11:19:37.558','2024-07-28 11:19:37.558','clz7b1u4y0000ff8ddd6p9ag3');
/*!40000 ALTER TABLE `Profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SubCategory`
--

DROP TABLE IF EXISTS `SubCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SubCategory` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `categoryId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SubCategory_id_categoryId_key` (`id`,`categoryId`),
  KEY `SubCategory_categoryId_fkey` (`categoryId`),
  CONSTRAINT `SubCategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SubCategory`
--

LOCK TABLES `SubCategory` WRITE;
/*!40000 ALTER TABLE `SubCategory` DISABLE KEYS */;
INSERT INTO `SubCategory` VALUES ('29555c5c-bd85-47af-bb66-a33224f78a92','Parcs et jardins','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','8bc94900-4574-4db7-8b3f-c84d561636b2'),('2acc0548-57d6-4891-8d6f-123b32d7d929','Math├®matiques','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','d6732b55-c80e-444d-a4bb-28164f81feeb'),('2ecfe405-9ccb-4476-b574-4e92a7da5217','Enseignement moral et civique','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','d6732b55-c80e-444d-a4bb-28164f81feeb'),('2fdf892c-70c8-48cf-bfcc-25787b68be8d','Histoire-g├®ographie','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','d6732b55-c80e-444d-a4bb-28164f81feeb'),('3a09e603-a683-4d7f-b436-4f5518094386','Technologie','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','d6732b55-c80e-444d-a4bb-28164f81feeb'),('4a96e818-4ab9-42d4-9216-521096bb66b9','Mus├®es et centres d\'expositions','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','8bc94900-4574-4db7-8b3f-c84d561636b2'),('6cf296bb-f15c-4040-b862-ebfa9c0ca46e','Piscine','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','3474fc6e-1929-41fe-9216-575dfbe99b96'),('75861639-dffe-426b-a638-bf7f5a0154f1','La cr├¿che familiale','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','0303732c-5663-40de-8d21-06e091fe98ba'),('77ed1499-919b-4d77-b567-a58bb69830dd','Ressources','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','3474fc6e-1929-41fe-9216-575dfbe99b96'),('89ffae78-6bde-46b8-9af1-94e898765259','La garde ├á domicile partag├®e','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','0303732c-5663-40de-8d21-06e091fe98ba'),('8e2668c7-75ae-4816-a44f-1628708b210f','Camps de vacances','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','8bc94900-4574-4db7-8b3f-c84d561636b2'),('a370e963-4783-47f4-8a92-f8306b2c06f2','Zoos et aquariums','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','8bc94900-4574-4db7-8b3f-c84d561636b2'),('b733f419-7cc0-44e4-af03-ba5559c11b5c','La garde ├á domicile','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','0303732c-5663-40de-8d21-06e091fe98ba'),('c0b52e20-38be-4935-a8bf-b1518a7694a0','L\'assistance maternelle','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','0303732c-5663-40de-8d21-06e091fe98ba'),('c867d414-92c2-4528-b21d-f364a642e972','Parc','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','3474fc6e-1929-41fe-9216-575dfbe99b96'),('f0387660-61ae-46a5-ba43-1f5ab411d4dc','Promenade','2024-07-28 11:19:36.263','2024-07-28 11:19:36.263','3474fc6e-1929-41fe-9216-575dfbe99b96');
/*!40000 ALTER TABLE `SubCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Subject`
--

DROP TABLE IF EXISTS `Subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Subject` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subject`
--

LOCK TABLES `Subject` WRITE;
/*!40000 ALTER TABLE `Subject` DISABLE KEYS */;
INSERT INTO `Subject` VALUES ('1c03742a-457a-4005-b934-9b813bde11be','quo ullam','2024-07-28 11:19:36.313','2024-07-28 11:19:36.313'),('28395140-894c-469d-a469-1409e876e76a','ullam tempore','2024-07-28 11:19:36.313','2024-07-28 11:19:36.313'),('4a23c44b-c6e6-4dca-b6ef-16cccda673a4','itaque voluptates','2024-07-28 11:19:36.313','2024-07-28 11:19:36.313'),('8add62bd-ac39-4ebb-80c8-3c28aab005e1','est soluta','2024-07-28 11:19:36.313','2024-07-28 11:19:36.313'),('ae22ec68-f4e6-4440-8303-8330215bd35d','adipisci reiciendis','2024-07-28 11:19:36.313','2024-07-28 11:19:36.313');
/*!40000 ALTER TABLE `Subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','parent','intervenant') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'admin',
  `status` enum('activated','unactivated') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'activated',
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `refreshToken` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','Josse','Durand','Armine_Renard@gmail.com','admin','unactivated','BnAymXhz8Po2VTS',NULL,'2024-07-28 11:19:36.361','2024-07-28 11:19:36.361'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','Amandine','Fleury','Celine_Dupuy81@gmail.com','admin','activated','a3NNOM2LDmaK72K',NULL,'2024-07-28 11:19:36.361','2024-07-28 11:19:36.361'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','Samuel','Giraud','Lea38@yahoo.fr','parent','activated','l1mdnKSdV9N3wua',NULL,'2024-07-28 11:19:36.360','2024-07-28 11:19:36.360'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','Douce','Marie','Valentin1@hotmail.fr','intervenant','activated','fb8HJn1eFjJseTn',NULL,'2024-07-28 11:19:36.360','2024-07-28 11:19:36.360'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','Marthe','Schmitt','Oriande.Marie95@yahoo.fr','parent','activated','_asTbhG9cJDaEer',NULL,'2024-07-28 11:19:36.360','2024-07-28 11:19:36.360'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','Pulch├®rie','Lefebvre','Eugene_Blanc@gmail.com','parent','activated','LObxIkKy_iI3Cs7',NULL,'2024-07-28 11:19:36.361','2024-07-28 11:19:36.361'),('6b822864-6bba-4414-a89e-8d259604ff92','Soline','Martin','Clarence.Carpentier74@yahoo.fr','parent','activated','OKI4_gbHkp_eZQu',NULL,'2024-07-28 11:19:36.361','2024-07-28 11:19:36.361'),('8b468fba-8193-495b-b9b8-f412b974fa28','Ameline','Francois','Artheme15@hotmail.fr','parent','activated','4MrR2wMDRitWCmD',NULL,'2024-07-28 11:19:36.361','2024-07-28 11:19:36.361'),('clz5j1q170000zndqhohko58o','joaquin','restrepo','joaquin.restrepo@email.com','admin','activated','$2b$10$U/V43A958JAtbXxVTvR3dOm37xYTg2ga5x71MZNujuq/Oue0Zgt3O',NULL,'2024-07-28 12:19:11.756','2024-07-28 12:19:11.756'),('clz5j7yc5000061qznrp3zw26','andres','ortiz','andres.ortiz@email.com','admin','activated','$2b$10$h93ibdWg5gz3AQqQc/YKc.42lcWQIHLynuCVnROLT53VsPMl6Id5u',NULL,'2024-07-28 12:24:02.453','2024-07-28 12:24:02.453'),('clz5r2oaj00005jsb3i5v1ib7','Duarte','Mario','mario.duarte@email.com','admin','activated','$2b$10$V97vNwO1Y0D6eo00Wb496ed0EWdUZPuUUAw3Tt3nSa1Q4NkbYGWiW',NULL,'2024-07-28 16:03:53.083','2024-07-28 16:03:53.083'),('clz5s0jhs0000njj1h4pt0rvx','Robledo','Alfonso','alfonso.robledo@email.com','admin','activated','$2b$10$WLgzpGvP4r87REDZF2Ba3OKS.RpRL4LvQKa3OHSXqVw6exWHSsuXq',NULL,'2024-07-28 16:30:13.168','2024-07-28 16:30:51.262'),('clz5smyeu0000mc8dqpzazq2n','Zuluaga','Jorge','jorge.zuluaga@email.com','admin','activated','$2b$10$7.X4Pa4mw.YqISjKSxSFe.A5pQYtaFY/H1Sop/pKxWuXyeNZLHDVu',NULL,'2024-07-28 16:47:38.934','2024-07-28 16:48:03.623'),('clz5t0j5y0000u37tmsjj181y','Montaner','Enrique','enrique.montaner@gmail.com','admin','activated','$2b$10$d0VW096ow4ftYZBcT.0dB.nla5Dyh1OR1igI3xzpa4IdYY1DBBq0q',NULL,'2024-07-28 16:58:12.359','2024-07-28 16:58:48.072'),('clz5ualo20000tma59vzoxx43','Varela','Eduardo','eduardo.varela@gmail.com','admin','activated','$2b$10$It2K7M6LhA5vahTkfAPnE.rKtYCOGUyO9chq0AK5St27ooWk0M3Wm',NULL,'2024-07-28 17:34:01.779','2024-07-28 17:34:26.895'),('clz79f9ds0000787o71tlgfyc','Ruiz','Carlos','carlos.ruiz@gmail.com','admin','activated','$2b$10$1CtVw0JdVgSDJ/zKb74AEOgIk5jQPqWsSEMb1Ai98jNabZgKXZOtq',NULL,'2024-07-29 17:25:19.553','2024-07-29 17:25:48.641'),('clz7adnns000011199omcwv8z','Torres','Arturo','arturo.torres@gmail.com','admin','activated','$2b$10$xh/qSUC7Rv4JYDq77jXHfeuGMn2J2.5/xUcHD9suxc8VJEYDXUVC.',NULL,'2024-07-29 17:52:04.361','2024-07-29 17:52:35.515'),('clz7b1u4y0000ff8ddd6p9ag3','Reyes','Alberto','alberto.reyes@gmail.com','admin','activated','$2b$10$BjdYoXD/eYevpdtR6Z92bu6GQ/ZbW5ipHKnumT9g6oX6jgA7TmGo.',NULL,'2024-07-29 18:10:52.498','2024-07-29 18:11:16.236'),('clz7vajdx0000zej72gscaq1n','Zuluaga','Felipe','felipe.zuluaga@gmail.com','admin','activated','$2b$10$BVZ.m1HK/vIvus7bz1dT6O3GzMYmEAX.DH5zWD3HvcOgSnCvq3QVe',NULL,'2024-07-30 03:37:30.789','2024-07-30 03:37:52.230'),('clz84so7n000014nqhilo4tk1','Silva','Federico','federico.silva@gmail.com','admin','activated','$2b$10$1kqJZfyLJiUhf7QkpAQD/OWlbttIqsaRVzx.MWGlbGsVNEmZgyjbW',NULL,'2024-07-30 08:03:33.395','2024-07-30 08:03:59.006'),('clz85f52q0000r0yvqexm6ltm','Guerrero','Santiago','santiago.guerrero@gmail.com','admin','activated','$2b$10$heo1NRINb/ssvYqYfN8uZ.TkTTVrrlvzksyJVs970X5EKAyOsYUyO','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbHo4NWY1MnEwMDAwcjB5dnFleG02bHRtIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI5NzkzNjU5LCJleHAiOjE3Mjk4ODAwNTl9.9vdvh1Lb0VTOeMR7_w48JQZWgkqz6i-2KXKrPyL_psI','2024-07-30 08:21:01.683','2024-10-24 18:14:19.521'),('cm00t159i0000c3woq62ji4td','vadmin','Val','vadmin@email.fr','admin','activated','$2b$10$4v4gQCro8WrcXhrKiI50BeXpJz21aPdjfUG3ZqoTOC1Fb11MQr6Cm','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbTAwdDE1OWkwMDAwYzN3b3E2MmppNHRkIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI0MjQ0MDgwLCJleHAiOjE3MjQzMzA0ODB9.nxTKIbTNs_V02onpzIRxgu3BgqsTqo7IYn9clDnX-5E','2024-08-19 09:39:32.455','2024-08-21 12:41:20.667'),('cm1ujxc7m0000hi5yde54rgx2','val','asso','admin@email.fr','admin','activated','$2b$10$fuQD.eA1wAzMolMRG390IehYf7CUDvi18xdaoGRQ8epOVnnFUXJBu','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbTF1anhjN20wMDAwaGk1eWRlNTRyZ3gyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI4MDM1OTUwLCJleHAiOjE3MjgxMjIzNTB9.mSN3yAuWmgsaIJmujFk1gyWEsb8cFpNlCKOImcTMsRA','2024-10-04 09:57:25.907','2024-10-04 09:59:10.203'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','Ascension','Laine','Antonine.Dumas12@yahoo.fr','admin','activated','w54CiYRN5ari_7R',NULL,'2024-07-28 11:19:36.361','2024-07-28 11:19:36.361'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','Aubry','Dumas','Gonthier94@gmail.com','intervenant','unactivated','jnYtFNKUBBiloqK',NULL,'2024-07-28 11:19:36.360','2024-07-28 11:19:36.360');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserGroup`
--

DROP TABLE IF EXISTS `UserGroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserGroup` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`userId`),
  CONSTRAINT `UserGroup_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserGroup`
--

LOCK TABLES `UserGroup` WRITE;
/*!40000 ALTER TABLE `UserGroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserGroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserGroupHasFiles`
--

DROP TABLE IF EXISTS `UserGroupHasFiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserGroupHasFiles` (
  `fileId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userGroupId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`fileId`,`userGroupId`),
  KEY `fk_Files_has_User_groups_User_groups1_idx` (`userGroupId`),
  KEY `fk_Files_has_User_groups_Files1_idx` (`fileId`),
  CONSTRAINT `UserGroupHasFiles_fileId_fkey` FOREIGN KEY (`fileId`) REFERENCES `File` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `UserGroupHasFiles_userGroupId_fkey` FOREIGN KEY (`userGroupId`) REFERENCES `UserGroup` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserGroupHasFiles`
--

LOCK TABLES `UserGroupHasFiles` WRITE;
/*!40000 ALTER TABLE `UserGroupHasFiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserGroupHasFiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserGroupHasUsers`
--

DROP TABLE IF EXISTS `UserGroupHasUsers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserGroupHasUsers` (
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userGroupId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('invited','member') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`userId`,`userGroupId`),
  KEY `user_group_id` (`userGroupId`),
  CONSTRAINT `UserGroupHasUsers_userGroupId_fkey` FOREIGN KEY (`userGroupId`) REFERENCES `UserGroup` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `UserGroupHasUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserGroupHasUsers`
--

LOCK TABLES `UserGroupHasUsers` WRITE;
/*!40000 ALTER TABLE `UserGroupHasUsers` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserGroupHasUsers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserHasAds`
--

DROP TABLE IF EXISTS `UserHasAds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserHasAds` (
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userAttendees` int DEFAULT NULL,
  `status` enum('true','false') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`userId`,`adId`),
  KEY `ad_id` (`adId`),
  CONSTRAINT `UserHasAds_adId_fkey` FOREIGN KEY (`adId`) REFERENCES `Ad` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `UserHasAds_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserHasAds`
--

LOCK TABLES `UserHasAds` WRITE;
/*!40000 ALTER TABLE `UserHasAds` DISABLE KEYS */;
INSERT INTO `UserHasAds` VALUES ('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','31e2949f-2244-42d2-8c23-8b95066a1037',6,'false','2024-07-28 11:19:39.115','2024-07-28 11:19:39.115'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','c48fb03f-c7cb-4a92-a5b3-2148abf4ca53',0,'true','2024-07-28 11:19:39.115','2024-07-28 11:19:39.115'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','c4a3dfda-83ff-4a76-998a-a4858d5023b5',0,'false','2024-07-28 11:19:39.115','2024-07-28 11:19:39.115'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','2f64d8a9-b080-4770-9312-8a33e2dba153',3,'true','2024-07-28 11:19:38.571','2024-07-28 11:19:38.571'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','784f7217-f377-430e-ad28-09c19e4f62d1',1,'false','2024-07-28 11:19:38.571','2024-07-28 11:19:38.571'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','8a3a3905-75b1-408c-857c-70cdb18bf6ef',1,'true','2024-07-28 11:19:38.571','2024-07-28 11:19:38.571'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','1f1783df-490b-4c3c-97ca-4f03746a53a3',3,'false','2024-07-28 11:19:36.612','2024-07-28 11:19:36.612'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','1f4d5317-456a-46e4-ad67-7906d8297f47',5,'true','2024-07-28 11:19:36.612','2024-07-28 11:19:36.612'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','221bf653-c603-4c9e-bc84-0beec65e7602',3,'false','2024-07-28 11:19:36.612','2024-07-28 11:19:36.612'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','75af7a14-50d6-4aca-ba87-3b279b09c5f8',1,'true','2024-07-28 11:19:37.185','2024-07-28 11:19:37.185'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','ce07fc33-f3a6-43e9-9b00-5728d9a93674',5,'true','2024-07-28 11:19:37.185','2024-07-28 11:19:37.185'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','fa4c9edd-0f41-4ce3-856e-8c453f7c4a71',5,'false','2024-07-28 11:19:37.185','2024-07-28 11:19:37.185'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','1b4e2ad2-2523-40d5-bcc9-ea7f2fc9eed6',5,'true','2024-07-28 11:19:36.894','2024-07-28 11:19:36.894'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','37067192-6094-401f-9456-0148025ac166',4,'false','2024-07-28 11:19:36.894','2024-07-28 11:19:36.894'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','cfb97578-72c2-45a7-a3ec-640f54769e73',3,'true','2024-07-28 11:19:36.894','2024-07-28 11:19:36.894'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','36ed1ee4-f3ef-41d1-8724-62f07f128cca',0,'true','2024-07-28 11:19:38.311','2024-07-28 11:19:38.311'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','ed39e8af-649c-477c-9e63-39b6fb0380c5',0,'false','2024-07-28 11:19:38.311','2024-07-28 11:19:38.311'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','fdcfd614-fda5-46e1-bee1-2c99b16ea595',6,'true','2024-07-28 11:19:38.311','2024-07-28 11:19:38.311'),('6b822864-6bba-4414-a89e-8d259604ff92','64f54f3f-b540-4c20-9ab5-c3d46bc8c228',0,'false','2024-07-28 11:19:38.830','2024-07-28 11:19:38.830'),('6b822864-6bba-4414-a89e-8d259604ff92','c80b1c04-c7cb-41df-91bf-9ca17cbf74a3',6,'true','2024-07-28 11:19:38.830','2024-07-28 11:19:38.830'),('6b822864-6bba-4414-a89e-8d259604ff92','e03e09e7-6f6f-4405-ace7-d29cb522ea54',3,'true','2024-07-28 11:19:38.830','2024-07-28 11:19:38.830'),('8b468fba-8193-495b-b9b8-f412b974fa28','381fcfa7-1d3c-4b68-b02f-f2cb044269cf',5,'true','2024-07-28 11:19:38.030','2024-07-28 11:19:38.030'),('8b468fba-8193-495b-b9b8-f412b974fa28','787bc86f-83fb-4954-9f0b-34ab3b8b6e83',4,'true','2024-07-28 11:19:38.030','2024-07-28 11:19:38.030'),('8b468fba-8193-495b-b9b8-f412b974fa28','c0e80b5e-dbe7-427a-ba1c-cd652fea1551',1,'false','2024-07-28 11:19:38.030','2024-07-28 11:19:38.030'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','3aabb5bd-4cf0-4631-abf7-18d3512e3208',4,'false','2024-07-28 11:19:37.765','2024-07-28 11:19:37.765'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','516350bf-6e67-4e0f-827e-962f7b430993',2,'false','2024-07-28 11:19:37.765','2024-07-28 11:19:37.765'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','cb0ab886-0930-4d12-925e-ee230974d83f',1,'false','2024-07-28 11:19:37.765','2024-07-28 11:19:37.765'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','8edda21e-4a45-41e8-86bb-1442a2e33cfa',2,'false','2024-07-28 11:19:37.474','2024-07-28 11:19:37.474'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','bcf27f4e-8a0c-4d84-980e-8d55b71257a8',3,'false','2024-07-28 11:19:37.474','2024-07-28 11:19:37.474'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','e23432a2-8649-41b5-bb2f-f99f6275952e',5,'true','2024-07-28 11:19:37.474','2024-07-28 11:19:37.474');
/*!40000 ALTER TABLE `UserHasAds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserHasChildren`
--

DROP TABLE IF EXISTS `UserHasChildren`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserHasChildren` (
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `childId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`,`childId`),
  KEY `child_id` (`childId`),
  CONSTRAINT `UserHasChildren_childId_fkey` FOREIGN KEY (`childId`) REFERENCES `Child` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `UserHasChildren_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserHasChildren`
--

LOCK TABLES `UserHasChildren` WRITE;
/*!40000 ALTER TABLE `UserHasChildren` DISABLE KEYS */;
INSERT INTO `UserHasChildren` VALUES ('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','3083237f-d0ef-4218-92ad-5c92088641f3'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','3083237f-d0ef-4218-92ad-5c92088641f3'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','3083237f-d0ef-4218-92ad-5c92088641f3'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','3083237f-d0ef-4218-92ad-5c92088641f3'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','3083237f-d0ef-4218-92ad-5c92088641f3'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','3083237f-d0ef-4218-92ad-5c92088641f3'),('6b822864-6bba-4414-a89e-8d259604ff92','3083237f-d0ef-4218-92ad-5c92088641f3'),('8b468fba-8193-495b-b9b8-f412b974fa28','3083237f-d0ef-4218-92ad-5c92088641f3'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','3083237f-d0ef-4218-92ad-5c92088641f3'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','3083237f-d0ef-4218-92ad-5c92088641f3'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('6b822864-6bba-4414-a89e-8d259604ff92','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('8b468fba-8193-495b-b9b8-f412b974fa28','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','53045d7d-58fe-4c47-982c-a06d52ae4a93'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('6b822864-6bba-4414-a89e-8d259604ff92','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('8b468fba-8193-495b-b9b8-f412b974fa28','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','6a184bb8-c12f-4829-bea0-82a16cf2e8e6'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','a0dd5409-139b-4705-b547-5edcb5721ef4'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','a0dd5409-139b-4705-b547-5edcb5721ef4'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','a0dd5409-139b-4705-b547-5edcb5721ef4'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','a0dd5409-139b-4705-b547-5edcb5721ef4'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','a0dd5409-139b-4705-b547-5edcb5721ef4'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','a0dd5409-139b-4705-b547-5edcb5721ef4'),('6b822864-6bba-4414-a89e-8d259604ff92','a0dd5409-139b-4705-b547-5edcb5721ef4'),('8b468fba-8193-495b-b9b8-f412b974fa28','a0dd5409-139b-4705-b547-5edcb5721ef4'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','a0dd5409-139b-4705-b547-5edcb5721ef4'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','a0dd5409-139b-4705-b547-5edcb5721ef4'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('6b822864-6bba-4414-a89e-8d259604ff92','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('8b468fba-8193-495b-b9b8-f412b974fa28','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','eae340fa-8a77-4c8c-9727-ec2b6300b62a'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','eae340fa-8a77-4c8c-9727-ec2b6300b62a');
/*!40000 ALTER TABLE `UserHasChildren` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserHasSubjects`
--

DROP TABLE IF EXISTS `UserHasSubjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserHasSubjects` (
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subjectId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`,`subjectId`),
  KEY `fk_Users_has_Subjects_Subjects1_idx` (`subjectId`),
  KEY `fk_Users_has_Subjects_Users1_idx` (`userId`),
  CONSTRAINT `UserHasSubjects_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subject` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `UserHasSubjects_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserHasSubjects`
--

LOCK TABLES `UserHasSubjects` WRITE;
/*!40000 ALTER TABLE `UserHasSubjects` DISABLE KEYS */;
INSERT INTO `UserHasSubjects` VALUES ('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','1c03742a-457a-4005-b934-9b813bde11be'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','1c03742a-457a-4005-b934-9b813bde11be'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','1c03742a-457a-4005-b934-9b813bde11be'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','1c03742a-457a-4005-b934-9b813bde11be'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','1c03742a-457a-4005-b934-9b813bde11be'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','1c03742a-457a-4005-b934-9b813bde11be'),('6b822864-6bba-4414-a89e-8d259604ff92','1c03742a-457a-4005-b934-9b813bde11be'),('8b468fba-8193-495b-b9b8-f412b974fa28','1c03742a-457a-4005-b934-9b813bde11be'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','1c03742a-457a-4005-b934-9b813bde11be'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','1c03742a-457a-4005-b934-9b813bde11be'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','28395140-894c-469d-a469-1409e876e76a'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','28395140-894c-469d-a469-1409e876e76a'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','28395140-894c-469d-a469-1409e876e76a'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','28395140-894c-469d-a469-1409e876e76a'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','28395140-894c-469d-a469-1409e876e76a'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','28395140-894c-469d-a469-1409e876e76a'),('6b822864-6bba-4414-a89e-8d259604ff92','28395140-894c-469d-a469-1409e876e76a'),('8b468fba-8193-495b-b9b8-f412b974fa28','28395140-894c-469d-a469-1409e876e76a'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','28395140-894c-469d-a469-1409e876e76a'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','28395140-894c-469d-a469-1409e876e76a'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('6b822864-6bba-4414-a89e-8d259604ff92','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('8b468fba-8193-495b-b9b8-f412b974fa28','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','4a23c44b-c6e6-4dca-b6ef-16cccda673a4'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('6b822864-6bba-4414-a89e-8d259604ff92','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('8b468fba-8193-495b-b9b8-f412b974fa28','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','8add62bd-ac39-4ebb-80c8-3c28aab005e1'),('15d8af14-ac78-4c3f-b3b2-09fb895ea8b0','ae22ec68-f4e6-4440-8303-8330215bd35d'),('1dbd02ce-25fb-4932-8fea-b9f54c943e99','ae22ec68-f4e6-4440-8303-8330215bd35d'),('27da5ab9-116a-4e32-afc6-e960419c2fb0','ae22ec68-f4e6-4440-8303-8330215bd35d'),('4243a065-43b9-4b4f-a82e-9ed675eccf5f','ae22ec68-f4e6-4440-8303-8330215bd35d'),('58db9331-51bd-4dc2-b470-6f9a1afd2965','ae22ec68-f4e6-4440-8303-8330215bd35d'),('5a56cd3c-c761-4e58-a9ed-48e1604cf63c','ae22ec68-f4e6-4440-8303-8330215bd35d'),('6b822864-6bba-4414-a89e-8d259604ff92','ae22ec68-f4e6-4440-8303-8330215bd35d'),('8b468fba-8193-495b-b9b8-f412b974fa28','ae22ec68-f4e6-4440-8303-8330215bd35d'),('e66ffe7c-9ee8-41c5-8e67-c2ad70587b1f','ae22ec68-f4e6-4440-8303-8330215bd35d'),('ef6612b2-b54d-45c0-8530-0fcb6a622ed5','ae22ec68-f4e6-4440-8303-8330215bd35d');
/*!40000 ALTER TABLE `UserHasSubjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('427a0308-d172-42a0-b891-d38fadfe8920','3a08ab81c20ac7c54c608d60e78a47b38bb86843f5829f78d2e4bad9413f01b0','2024-07-28 11:16:20.587','20240606171952_init',NULL,NULL,'2024-07-28 11:16:18.689',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-25 14:40:09
