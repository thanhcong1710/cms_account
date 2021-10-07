/*
 Navicat Premium Data Transfer

 Source Server         : DB - google console 35.187.235.207
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : 35.187.235.207:3306
 Source Schema         : cms_account

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 07/10/2021 22:37:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for email_template
-- ----------------------------
DROP TABLE IF EXISTS `email_template`;
CREATE TABLE `email_template` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of email_template
-- ----------------------------
BEGIN;
INSERT INTO `email_template` VALUES (1, NULL, NULL, '<!DOCTYPE html>\n                <html lang=\"en\">\n                <head>\n                    <meta charset=\"utf-8\">\n                    <meta name=\"viewport\" content=\"width=device-width\">\n                    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n                    <meta name=\"x-apple-disable-message-reformatting\">\n                    <title>Example</title>\n                    <style>\n                        body {\n                            background-color:#fff;\n                            color:#222222;\n                            margin: 0px auto;\n                            padding: 0px;\n                            height: 100%;\n                            width: 100%;\n                            font-weight: 400;\n                            font-size: 15px;\n                            line-height: 1.8;\n                        }\n                        .continer{\n                            width:400px;\n                            margin-left:auto;\n                            margin-right:auto;\n                            background-color:#efefef;\n                            padding:30px;\n                        }\n                        .btn{\n                            padding: 5px 15px;\n                            display: inline-block;\n                        }\n                        .btn-primary{\n                            border-radius: 3px;\n                            background: #0b3c7c;\n                            color: #fff;\n                            text-decoration: none;\n                        }\n                        .btn-primary:hover{\n                            border-radius: 3px;\n                            background: #4673ad;\n                            color: #fff;\n                            text-decoration: none;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <div class=\"continer\">\n                        <h1>Lorem ipsum dolor</h1>\n                        <h4>Ipsum dolor cet emit amet</h4>\n                        <p>\n                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <strong>commodo consequat</strong>. \n                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                        </p>\n                        <h4>Ipsum dolor cet emit amet</h4>\n                        <p>\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <a href=\"#\">tempor incididunt ut labore</a> et dolore magna aliqua.\n                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n                        </p>\n                        <h4>Ipsum dolor cet emit amet</h4>\n                        <p>\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n                        </p>\n                        <a href=\"#\" class=\"btn btn-primary\">Lorem ipsum dolor</a>\n                        <h4>Ipsum dolor cet emit amet</h4>\n                        <p>\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                            Ut enim ad minim veniam, quis nostrud exercitation <a href=\"#\">ullamco</a> laboris nisi ut aliquip ex ea commodo consequat. \n                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                        </p>\n                    </div>\n                </body>\n                </html>', 'Example E-mail', 'Example E-mail');
COMMIT;

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for folder
-- ----------------------------
DROP TABLE IF EXISTS `folder`;
CREATE TABLE `folder` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `folder_id` int(10) unsigned DEFAULT NULL,
  `resource` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of folder
-- ----------------------------
BEGIN;
INSERT INTO `folder` VALUES (1, NULL, NULL, 'root', NULL, NULL);
INSERT INTO `folder` VALUES (2, NULL, NULL, 'resource', 1, 1);
INSERT INTO `folder` VALUES (3, NULL, NULL, 'documents', 1, NULL);
INSERT INTO `folder` VALUES (4, NULL, NULL, 'graphics', 1, NULL);
INSERT INTO `folder` VALUES (5, NULL, NULL, 'other', 1, NULL);
COMMIT;

-- ----------------------------
-- Table structure for media
-- ----------------------------
DROP TABLE IF EXISTS `media`;
CREATE TABLE `media` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  `collection_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disk` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` bigint(20) unsigned NOT NULL,
  `manipulations` json NOT NULL,
  `custom_properties` json NOT NULL,
  `responsive_images` json NOT NULL,
  `order_column` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `media_model_type_model_id_index` (`model_type`,`model_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of media
-- ----------------------------
BEGIN;
INSERT INTO `media` VALUES (2, 'App\\Models\\Folder', 2, 'default', 'FullSizeRender 2.jpg', '20200827050953FullSizeRender-2.jpg', 'image/jpeg', 'public', 1604293, '[]', '[]', '[]', 1, '2020-08-27 05:09:53', '2020-08-27 05:09:53');
COMMIT;

-- ----------------------------
-- Table structure for menu_role
-- ----------------------------
DROP TABLE IF EXISTS `menu_role`;
CREATE TABLE `menu_role` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menus_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of menu_role
-- ----------------------------
BEGIN;
INSERT INTO `menu_role` VALUES (1, 'guest', 1);
INSERT INTO `menu_role` VALUES (2, 'user', 1);
INSERT INTO `menu_role` VALUES (3, 'admin', 1);
INSERT INTO `menu_role` VALUES (5, 'guest', 3);
INSERT INTO `menu_role` VALUES (6, 'admin', 4);
INSERT INTO `menu_role` VALUES (7, 'admin', 5);
INSERT INTO `menu_role` VALUES (8, 'admin', 6);
INSERT INTO `menu_role` VALUES (9, 'admin', 7);
INSERT INTO `menu_role` VALUES (18, 'user', 13);
INSERT INTO `menu_role` VALUES (19, 'admin', 13);
INSERT INTO `menu_role` VALUES (20, 'user', 14);
INSERT INTO `menu_role` VALUES (21, 'admin', 14);
INSERT INTO `menu_role` VALUES (22, 'user', 15);
INSERT INTO `menu_role` VALUES (23, 'admin', 15);
INSERT INTO `menu_role` VALUES (24, 'user', 16);
INSERT INTO `menu_role` VALUES (25, 'admin', 16);
INSERT INTO `menu_role` VALUES (26, 'user', 17);
INSERT INTO `menu_role` VALUES (27, 'admin', 17);
INSERT INTO `menu_role` VALUES (28, 'user', 18);
INSERT INTO `menu_role` VALUES (29, 'admin', 18);
INSERT INTO `menu_role` VALUES (30, 'user', 19);
INSERT INTO `menu_role` VALUES (31, 'admin', 19);
INSERT INTO `menu_role` VALUES (32, 'user', 20);
INSERT INTO `menu_role` VALUES (33, 'admin', 20);
INSERT INTO `menu_role` VALUES (34, 'user', 21);
INSERT INTO `menu_role` VALUES (35, 'admin', 21);
INSERT INTO `menu_role` VALUES (36, 'user', 22);
INSERT INTO `menu_role` VALUES (37, 'admin', 22);
INSERT INTO `menu_role` VALUES (38, 'user', 23);
INSERT INTO `menu_role` VALUES (39, 'admin', 23);
INSERT INTO `menu_role` VALUES (40, 'user', 24);
INSERT INTO `menu_role` VALUES (41, 'admin', 24);
INSERT INTO `menu_role` VALUES (42, 'user', 25);
INSERT INTO `menu_role` VALUES (43, 'admin', 25);
INSERT INTO `menu_role` VALUES (44, 'user', 26);
INSERT INTO `menu_role` VALUES (45, 'admin', 26);
INSERT INTO `menu_role` VALUES (46, 'user', 27);
INSERT INTO `menu_role` VALUES (47, 'admin', 27);
INSERT INTO `menu_role` VALUES (48, 'user', 28);
INSERT INTO `menu_role` VALUES (49, 'admin', 28);
INSERT INTO `menu_role` VALUES (50, 'user', 29);
INSERT INTO `menu_role` VALUES (51, 'admin', 29);
INSERT INTO `menu_role` VALUES (52, 'user', 30);
INSERT INTO `menu_role` VALUES (53, 'admin', 30);
INSERT INTO `menu_role` VALUES (54, 'user', 31);
INSERT INTO `menu_role` VALUES (55, 'admin', 31);
INSERT INTO `menu_role` VALUES (56, 'user', 32);
INSERT INTO `menu_role` VALUES (57, 'admin', 32);
INSERT INTO `menu_role` VALUES (58, 'user', 33);
INSERT INTO `menu_role` VALUES (59, 'admin', 33);
INSERT INTO `menu_role` VALUES (60, 'user', 34);
INSERT INTO `menu_role` VALUES (61, 'admin', 34);
INSERT INTO `menu_role` VALUES (62, 'user', 35);
INSERT INTO `menu_role` VALUES (63, 'admin', 35);
INSERT INTO `menu_role` VALUES (64, 'user', 36);
INSERT INTO `menu_role` VALUES (65, 'admin', 36);
INSERT INTO `menu_role` VALUES (66, 'user', 37);
INSERT INTO `menu_role` VALUES (67, 'admin', 37);
INSERT INTO `menu_role` VALUES (68, 'user', 38);
INSERT INTO `menu_role` VALUES (69, 'admin', 38);
INSERT INTO `menu_role` VALUES (70, 'user', 39);
INSERT INTO `menu_role` VALUES (71, 'admin', 39);
INSERT INTO `menu_role` VALUES (72, 'user', 40);
INSERT INTO `menu_role` VALUES (73, 'admin', 40);
INSERT INTO `menu_role` VALUES (74, 'user', 41);
INSERT INTO `menu_role` VALUES (75, 'admin', 41);
INSERT INTO `menu_role` VALUES (76, 'user', 42);
INSERT INTO `menu_role` VALUES (77, 'admin', 42);
INSERT INTO `menu_role` VALUES (78, 'user', 43);
INSERT INTO `menu_role` VALUES (79, 'admin', 43);
INSERT INTO `menu_role` VALUES (80, 'user', 44);
INSERT INTO `menu_role` VALUES (81, 'admin', 44);
INSERT INTO `menu_role` VALUES (82, 'user', 45);
INSERT INTO `menu_role` VALUES (83, 'admin', 45);
INSERT INTO `menu_role` VALUES (84, 'user', 46);
INSERT INTO `menu_role` VALUES (85, 'admin', 46);
INSERT INTO `menu_role` VALUES (86, 'user', 47);
INSERT INTO `menu_role` VALUES (87, 'admin', 47);
INSERT INTO `menu_role` VALUES (88, 'user', 48);
INSERT INTO `menu_role` VALUES (89, 'admin', 48);
INSERT INTO `menu_role` VALUES (90, 'user', 49);
INSERT INTO `menu_role` VALUES (91, 'admin', 49);
INSERT INTO `menu_role` VALUES (92, 'user', 50);
INSERT INTO `menu_role` VALUES (93, 'admin', 50);
INSERT INTO `menu_role` VALUES (94, 'guest', 51);
INSERT INTO `menu_role` VALUES (95, 'user', 51);
INSERT INTO `menu_role` VALUES (96, 'admin', 51);
INSERT INTO `menu_role` VALUES (117, 'guest', 2);
INSERT INTO `menu_role` VALUES (124, 'admin', 63);
INSERT INTO `menu_role` VALUES (134, 'admin', 64);
INSERT INTO `menu_role` VALUES (135, 'user', 64);
INSERT INTO `menu_role` VALUES (138, 'admin', 66);
INSERT INTO `menu_role` VALUES (139, 'user', 66);
INSERT INTO `menu_role` VALUES (146, 'admin', 65);
INSERT INTO `menu_role` VALUES (147, 'user', 65);
INSERT INTO `menu_role` VALUES (148, 'guest', 65);
COMMIT;

-- ----------------------------
-- Table structure for menulist
-- ----------------------------
DROP TABLE IF EXISTS `menulist`;
CREATE TABLE `menulist` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of menulist
-- ----------------------------
BEGIN;
INSERT INTO `menulist` VALUES (1, 'sidebar menu');
INSERT INTO `menulist` VALUES (2, 'top_menu');
COMMIT;

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `href` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(10) unsigned DEFAULT NULL,
  `menu_id` int(10) unsigned NOT NULL,
  `sequence` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of menus
-- ----------------------------
BEGIN;
INSERT INTO `menus` VALUES (1, 'Dashboard', '/', 'cil-speedometer', 'link', NULL, 1, 1);
INSERT INTO `menus` VALUES (2, 'Login', '/login', 'cil-account-logout', 'link', NULL, 1, 2);
INSERT INTO `menus` VALUES (3, 'Register', '/register', 'cil-account-logout', 'link', NULL, 1, 3);
INSERT INTO `menus` VALUES (4, 'Settings', '/', 'cil-puzzle', 'dropdown', NULL, 1, 10);
INSERT INTO `menus` VALUES (5, 'Media', '/media', NULL, 'link', 4, 1, 5);
INSERT INTO `menus` VALUES (6, 'Users', '/users', NULL, 'link', 4, 1, 11);
INSERT INTO `menus` VALUES (7, 'Menu', '/menu', NULL, 'link', 4, 1, 12);
INSERT INTO `menus` VALUES (63, 'Role', '/roles', NULL, 'link', 4, 1, 13);
INSERT INTO `menus` VALUES (64, 'Khách Hàng', '/parents', 'cil-user', 'link', NULL, 1, 4);
INSERT INTO `menus` VALUES (65, 'Import', '/imports', 'cil-cloud-upload', 'link', 0, 1, 7);
COMMIT;

-- ----------------------------
-- Table structure for model_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `model_has_permissions`;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`) USING BTREE,
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`) USING BTREE,
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of model_has_permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for model_has_roles
-- ----------------------------
DROP TABLE IF EXISTS `model_has_roles`;
CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`) USING BTREE,
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`) USING BTREE,
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of model_has_roles
-- ----------------------------
BEGIN;
INSERT INTO `model_has_roles` VALUES (1, 'App\\User', 1);
INSERT INTO `model_has_roles` VALUES (2, 'App\\User', 1);
INSERT INTO `model_has_roles` VALUES (2, 'App\\User', 2);
INSERT INTO `model_has_roles` VALUES (2, 'App\\User', 3);
COMMIT;

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for role_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `role_has_permissions`;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`) USING BTREE,
  KEY `role_has_permissions_role_id_foreign` (`role_id`) USING BTREE,
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of role_has_permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for role_hierarchy
-- ----------------------------
DROP TABLE IF EXISTS `role_hierarchy`;
CREATE TABLE `role_hierarchy` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(10) unsigned NOT NULL,
  `hierarchy` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of role_hierarchy
-- ----------------------------
BEGIN;
INSERT INTO `role_hierarchy` VALUES (1, 1, 1);
INSERT INTO `role_hierarchy` VALUES (2, 2, 2);
INSERT INTO `role_hierarchy` VALUES (3, 3, 3);
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES (1, 'admin', 'api', '2020-08-27 02:04:43', '2020-08-27 02:04:43');
INSERT INTO `roles` VALUES (2, 'user', 'api', '2020-08-27 02:04:43', '2020-08-27 02:04:43');
INSERT INTO `roles` VALUES (3, 'guest', 'api', '2020-08-27 02:04:43', '2020-08-27 02:04:43');
COMMIT;

-- ----------------------------
-- Table structure for user_system
-- ----------------------------
DROP TABLE IF EXISTS `user_system`;
CREATE TABLE `user_system` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `system` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(2) DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_system
-- ----------------------------
BEGIN;
INSERT INTO `user_system` VALUES (1, 1, 'crm', 1);
INSERT INTO `user_system` VALUES (2, 1, 'leads', 1);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `api_token` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menuroles` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `branch_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hrm_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manager_hrm_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manager_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `users_email_unique` (`email`) USING BTREE,
  UNIQUE KEY `users_api_token_unique` (`api_token`) USING BTREE,
  KEY `manager_id` (`manager_id`) USING BTREE,
  KEY `hrm_id` (`hrm_id`) USING BTREE,
  KEY `manager_hrm_id` (`manager_hrm_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'admin', 'admin@admin.com', '2020-08-27 02:04:43', '$2y$10$upeEWEPRUHvriPrThSy8hOMzfqxFGRFPrBP0UgkBwC8C54RBz/6C6', NULL, 'admin,user', 1, 'EQt3UDeo4F', '2020-08-27 02:04:43', '2021-07-23 08:07:52', NULL, 'Trung tâm - HAPU', 'C0001', NULL, 0);
INSERT INTO `users` VALUES (2, 'EC Phạm Văn Đồng', 'ec@gmail.com', '2021-09-17 04:16:55', '$2y$10$qxlbBNAm6j58AfHJQJttneexljQMQ4dvOe5AtUi3IkdSqGJQIU69.', NULL, 'user', 1, NULL, '2021-09-17 04:16:55', '2021-09-20 07:03:06', NULL, 'Phạm Văn Đồng', 'C0006', 'C0001', 1);
INSERT INTO `users` VALUES (3, 'ECL Phạm văn đồng', 'ecl@gmail.com', '2021-09-17 09:55:22', '$2y$10$kN.AUTNmiaLrYptAV9lRMOnMiXa8JCXz7shR79l1CdRZ.fRXJl5D2', NULL, 'user', 1, NULL, '2021-09-17 09:55:22', '2021-09-17 09:55:22', NULL, NULL, 'G0005', 'G0001', 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
