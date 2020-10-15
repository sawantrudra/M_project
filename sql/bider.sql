-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2020 at 05:24 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bider`
--

-- --------------------------------------------------------

--
-- Table structure for table `bid`
--

CREATE TABLE `bid` (
  `id` varchar(255) NOT NULL,
  `bid_amt` float DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `post_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `favorite_posts`
--

CREATE TABLE `favorite_posts` (
  `user_id` varchar(255) NOT NULL,
  `post_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pic` longblob DEFAULT NULL,
  `post_id` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `min_bid` float DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` varchar(255) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question`, `short_name`) VALUES
('084b918e-15cd-49ca-8d4b-80257860432b', 'What is your mother\'s maiden name?', 'maidenName'),
('0d40a4ea-1cb9-4abf-9252-31528fc4c07e', 'Where was your best family vacation as a kid?', 'vacationName'),
('3d6e415a-88ff-4467-af92-1b512229dca3', 'Where were you born?', 'birthPlace'),
('573e6cd5-49f6-44c9-8412-47c9664028d4', 'What is your first pet\'s name?', 'petName'),
('72a8916e-7dd2-4194-866e-9bcc20a66908', 'What is your childhood nickname?', 'nickName'),
('9c789c5d-e7ce-4f44-9e47-72a9e7917874', 'Who was your childhood hero?', 'heroName'),
('bed4c381-e4d8-49c3-a91e-43bf53469e65', 'What was your first car?', 'firstCar'),
('c57443e8-a21d-4b11-aeca-23f63d112a9b', 'What is your favourite hobby?', 'hobbyName'),
('c5d26eca-9b2c-46b0-ba73-50f615bbe67b', 'What elementary school did you attend?', 'schoolName'),
('c5d26eca-9c2c-46c0-ca73-50f615cce67c', 'Google Account', 'google');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `image_id` varchar(255) DEFAULT NULL,
  `qtn_id` varchar(255) DEFAULT NULL,
  `is_social` bit(1) DEFAULT NULL,
  `social_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `verification_token`
--

CREATE TABLE `verification_token` (
  `id` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bid`
--
ALTER TABLE `bid`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4abkntgv9nvsfi86p7kfl63au` (`user_id`),
  ADD KEY `FKq34k2mowpib04bnkksvcoeluw` (`post_id`);

--
-- Indexes for table `favorite_posts`
--
ALTER TABLE `favorite_posts`
  ADD PRIMARY KEY (`user_id`,`post_id`),
  ADD KEY `FKfddrih7swf6wmgmjy3b6vgxx3` (`post_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK72mt33dhhs48hf9gcqrq4fxte` (`user_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpgys8gt0tegoiimv658bb2mo5` (`image_id`),
  ADD KEY `FK2rxoxjjds3s62imgrsw1t1hy5` (`qtn_id`);

--
-- Indexes for table `verification_token`
--
ALTER TABLE `verification_token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrdn0mss276m9jdobfhhn2qogw` (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bid`
--
ALTER TABLE `bid`
  ADD CONSTRAINT `FK4abkntgv9nvsfi86p7kfl63au` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKq34k2mowpib04bnkksvcoeluw` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`);

--
-- Constraints for table `favorite_posts`
--
ALTER TABLE `favorite_posts`
  ADD CONSTRAINT `FK5u1evy1gys8ww2b3bu86kk5wi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKfddrih7swf6wmgmjy3b6vgxx3` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK72mt33dhhs48hf9gcqrq4fxte` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK2rxoxjjds3s62imgrsw1t1hy5` FOREIGN KEY (`qtn_id`) REFERENCES `questions` (`id`),
  ADD CONSTRAINT `FKpgys8gt0tegoiimv658bb2mo5` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`);

--
-- Constraints for table `verification_token`
--
ALTER TABLE `verification_token`
  ADD CONSTRAINT `FKrdn0mss276m9jdobfhhn2qogw` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
