import {Project, ProjectID} from '../index'

  export const projects: Project[] = [
    { 
      id: 'Medical' as ProjectID,
      title: 'Something Medical',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'Brief one-line description of the project',
      techStack: ['React', 'Next.js', 'FastAPI', 'In Development'],
      github: '/pages/project',
      demo: '/pages/project',
      details: {
        overview: 'Currently Brainstorming. I recently went to a doctors appointment for one of my relatives and noticed inefficent in paperwork. Calling a Doctor to translate for my family member. What if I create a Translator to help combat this or handsignal translator. Additionally, im surprised that their paperwork workflow is slow. Maybe reworking their system to improve visibilities transparencies with patients? Need to brainstorm some more.',
        challenge: 'Improve the workflow effiency to attend to clients quickly and informatively. ',
        technical: 'Currently Brainstorming',
        results: 'Currently Brainstorming',
        learned: 'Currently Brainstorming'
      }
    },

    { 
      id: 'Map Navigation' as ProjectID,
      title: 'Map Navigation',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'A Map Navigation app that helps users find and coordinate meeting spots based on real-time distances from their current locations.',
      techStack: ['Next.js', 'TailwindCSS', 'FastAPI', 'In Development'],
      github: '/pages/project',
      demo: '/pages/project',
      details: {
        overview: 'Currently brainstorming. The goal of this project is to find the best meeting location based on everyones location. The biggest issue my friend experience is finding the best location to hang out then move on to the next location. In this group each person is scattered throughout the Houston Area ranging about a 30min to 1hr 30min drive. so we aim to find the best location that works for everyone. It can save gas money, time, and ensure a successful hangout!',
        challenge: 'Finding the right hangout spot based on particpating individuals locations',
        technical: 'In-Progress',
        results: 'In-Progress',
        learned: 'In-Progress'
      }
    },
        
    {
      id: 'Volunteer Management System' as ProjectID,
      title: 'Volunteer Management System',
      category: 'indevelopment',
      categoryLabel: 'Full Stack',
      tagline: 'A Volunteer Management app that lets users organize, track, and manage volunteers and events efficiently.',
      techStack: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'In Development'],
      github: '#',
      demo: '/pages/project',
      details: {
        overview: 'A work in progress that allows volunteers and admins to manage, create, and assign events to their schedule based on skills, availibilty, location, and urgency. ',
        challenge: 'Volunteer Management System',
        technical: 'In-progress',
        results: 'In-progress',
        learned: 'In-progress'
      }
    },
    {
      id: 'Pneumonia' as ProjectID,
      title: 'Disease Analysis',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'A medical imaging project that uses object detection on X-rays to identify and diagnose pneumonia in patients.',
      techStack: ['Python', 'Pandas', 'Matplotlib', 'SQL', 'Tensorflow', 'Google Colab'],
      github: 'https://github.com/LemurTech22/Pneumonia-Project',
      demo: '/pages/project',
      details: {
        overview: 'This project was given from Hewlett Packard Enterprise Data Science Institute and we had to create a Image Detection model. I chose to pursue detecting Pneumonia in patients by using a Convolutional Neural Network to detect abnomalies in the lungs. ',
        challenge: 'Detecting Pneumonia in patients',
        technical: 'In this project, a Convolutional Neural Network (CNN) was developed to classify chest X-ray images as either Normal or Pneumonia using a publicly available Kaggle dataset containing over 5,000 training images, along with separate test and validation sets. The dataset was automatically structured into folders by class and split, eliminating the need for manual partitioning. Images were preprocessed using TensorFlow’s image_dataset_from_directory function to ensure consistent dimensions (224×334 pixels) and normalized via a Rescaling(1./255) layer. The CNN architecture consisted of three convolutional layers with increasing filter sizes (16, 32, 64), each followed by MaxPooling layers to progressively reduce spatial dimensions and retain key features. The extracted features were flattened and passed through two dense layers (128 neurons, then 2 output classes). The model was compiled with the Adam optimizer, Sparse Categorical Crossentropy loss, and accuracy as the evaluation metric. It was trained over 5 epochs, achieving the following key results: Training Accuracy: 98.1% Validation Accuracy: 93.7% Validation Loss: 0.0631 Performance visualization indicated stable convergence with minimal overfitting. Testing on unseen data confirmed the model’s reliability, correctly classifying most X-ray images, though some misclassifications occurred in borderline pneumonia cases.' ,
        results: 'following key results: Training Accuracy: 98.1% Validation Accuracy: 93.7% Validation Loss: 0.0631 Performance visualization indicated stable convergence with minimal overfitting. Testing on unseen data confirmed the model’s reliability, correctly classifying most X-ray images, though some misclassifications occurred in borderline pneumonia cases. Overall, the CNN demonstrated high classification accuracy and generalization, effectively distinguishing pneumonia from normal X-rays. Identified limitations include long training time (~30–40 minutes on Google Colab GPUs) and occasional misclassification of mild pneumonia cases. Future improvements could involve using Dropout layers, data augmentation, or transfer learning (e.g., pretrained models like VGG16 or ResNet) to enhance accuracy and reduce training time..',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Chevron' as ProjectID,
      title: 'Chevron Vehicle Prediction',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'A predictive analytics project from the Spring 2025 Rice Datathon with Chevron focused on modeling and forecasting future vehicle and fuel technology trends using machine learning.',
      techStack: ['Python', 'Pandas','Matplotlib', 'Seaborn', 'Scikit-Learn', 'Pycaret'],
      github: 'https://github.com/LemurTech22/Chevron-Vehicle-Prediction',
      demo: '/pages/project',
      details: {
        overview: 'We analyzed a dataset of 41,000 vehicle records, focusing on categorical features like fuel type, vehicle category, and fuel technology, with the goal of predicting vehicle and fuel types and estimating future population sizes. To handle missing values, we applied imputation instead of dropping data, and used label encoding to convert categorical features for machine learning. Non-linear patterns in the data led us to apply logarithmic transformations, improving scaling, reducing redundancy, and mitigating overfitting. Using PyCaret to test multiple models, Random Forest emerged as the best performer, achieving 98% R² for regression and 89% accuracy for classification. Our streamlined pipeline, including imputation, robust scaling, and training, ensured reproducibility and efficiency. We are now fine-tuning models for time-based predictions and exploring interactive ways to visualize and share trends in vehicle categories and fuel technologies.',
        challenge: 'As new sources of fuel emerge for vehicles, what types of fuel can we expect to see in the future? With the rapid rise of electric vehicles, will gasoline and diesel engines eventually become obsolete?',
        technical: 'Missing Values: Implemented imputation techniques instead of dropping rows to preserve data. Converted to numerical values using label encoding. Non-linear Patterns: Visualizations (box plots, KDE plots) and correlation testing revealed non-linear relationships. Logarithmic transformations were applied to features to improve scaling, reduce redundancy, and mitigate overfitting. Modeling Process Used PyCaret to test and compare multiple machine learning algorithms quickly. Built a streamlined pipeline including: Imputation Scaling using RobustScaler (resilient to outliers).Focused on Random Forest models, which were the best performers for both regression and classification tasks.',
        results: 'So far, our models have performed well in training Regression: 98% R² score.Classification: 89% accuracy. Further testing to fine tune the model.',
        learned: 'Currently in progress'
      }
    },
    {
      id: 'Urban_Safety' as ProjectID,
      title: 'Urban Safety Project',
      category: 'datavisual',
      categoryLabel: 'Data Visualization',
      tagline: 'An interactive data visualization project that analyzes and maps vehicle accident patterns to promote public safety and inform data-driven urban planning decisions.',
      techStack: ['Python', 'pandas','Matplotlib', 'Seaborn', 'Scikit-Learn', 'Folium'],
      github: 'https://github.com/LemurTech22/Urban-Safety-Project',
      demo: '/pages/project',
      details: {
        overview: 'The Urban Safety Insights project is an interactive data visualization platform designed to identify areas with high concentrations of vehicle accidents, including intersections, highways, regions affected by severe weather, and incidents involving impaired driving. Using a comprehensive dataset from the State of Maryland, we cleaned and standardized over 38 features, removed irrelevant metadata, and addressed inconsistencies in categorical values. Leveraging Python, Pandas, Matplotlib, Seaborn, Scikit-Learn, and Folium, we applied unsupervised learning techniques, experimenting with KMeans and DBSCAN clustering to detect accident hotspots. DBSCAN proved most effective, dynamically identifying dense clusters while handling outliers, which were then plotted on interactive Folium maps for clear spatial visualization. This approach aims to raise public awareness, inform infrastructure improvements, and support proactive safety measures to reduce accidents and enhance urban safety planning.',
        challenge: 'The Urban Safety Insights project aims to identify accident hotspots and uncover patterns in vehicle collisions to support safer driving, inform infrastructure improvements, and guide data-driven urban planning. By visualizing high-risk areas interactively, it helps reduce accidents and enhance public safety.',
        technical: 'The project leveraged Python, Pandas, Matplotlib, Seaborn, Scikit-Learn, and Folium to clean, standardize, and analyze a complex accident dataset with 38 features. After removing irrelevant metadata and handling missing values, categorical inconsistencies were resolved through mapping dictionaries. Unsupervised learning methods were applied to detect accident hotspots, with KMeans initially tested but ultimately replaced by DBSCAN due to its ability to handle spatial irregularities and outliers without a predefined number of clusters. The resulting clusters were visualized interactively using Folium, plotting precise accident locations and density-based clusters for intuitive exploration.',
        results: 'This approach successfully highlighted high-risk zones, providing actionable insights for public safety, infrastructure planning, and proactive accident prevention.',
        learned: 'I learned about Data Engineering and Cleaning up missing and insconsistent values. Additionally, i learned how to apply clustering algorithms and use the foilum API to generate the interactive map.'
      }
    },
    {
      id: 'Energy_Forecasting' as ProjectID,
      title: 'SmartWatts Energy Forecast',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'A deep learning project with SmartWatts that models and forecasts residential energy consumption using RNN, LSTM, and GRU architectures on two years of smart meter and weather data.',
      techStack: ['Python', 'Excel', 'Matplotlib', 'Tensorflow','Seaborn', 'Data Engineering'],
      github: 'https://github.com/LemurTech22/COSC-4368-SmartWatt-',
      demo: '/pages/project',
      details: {
        overview: 'This project, completed in collaboration with SmartWatts, analyzed two years of residential energy usage data, totaling approximately 900,000 records collected at 15-minute intervals. The goal was to explore consumption patterns, generate insights, and develop models to forecast future energy demand. A key hypothesis was that temperature significantly influences energy use, particularly during extreme heat events in Texas, prompting integration of historical weather data via the Meteostat API.',
        challenge: 'In collaboration with a Startup Company named SmartWatts. Our Team goal is to provide insights into their data and provide a actionable solution to present to the company. Our goal was to forecast energy usage with respect to temperature within a 1 month time period.',
        technical: 'The data was first preprocessed by removing irrelevant features, handling missing values, and scaling to account for outliers. Individual user energy profiles were isolated to train models while testing generalization across different households. Time-series data was prepared to incorporate both energy usage and temperature, which enabled accurate sequential modeling. We trained and evaluated three deep learning architectures—Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTM), and Gated Recurrent Units (GRU)—to forecast energy consumption. Model performance was validated by holding out a full month of data and comparing predictions to actual readings, with confidence intervals applied to assess the reliability of the forecasts.',
        results: 'The LSTM model outperformed the others, achieving 97% accuracy in predicting energy consumption, while forecasts for held-out data matched actual values at approximately 95%. Analysis confirmed that temperature is a primary driver of energy demand, particularly during periods of extreme heat. The project\'s modeling pipeline provides reliable forecasts at the individual household level, enabling SmartWatts to optimize energy planning, anticipate peak demand, and inform proactive strategies for managing residential energy usage.',
        learned: 'First Dive into Data Science so learned alot about the workflow on gathering data, visualizing, cleaning and creating a model.'
      }
    },
    {
      id: 'Credit Card Fraud Detection' as ProjectID,
      title: 'Credit Card Fraud Detection',
      category: 'datascience',
      categoryLabel: 'Data Science',
      tagline: 'A machine learning project in R that detects fraudulent transactions using SVM and KNN models with data cleaning, visualization, and performance evaluation.',
      techStack: ['R', 'Tidyverse', 'corrplot', 'Machine Learning'],
      github: 'https://github.com/LemurTech22/MATH-4323-Statisical-Learning/tree/main/Project',
      demo: '/pages/project',
      details: {
        overview: 'In this project, my team and I used clustering algorithms to detect abnormal network traffic determine if a card transaction was fraudulant or not',
        challenge: 'This automates and enhances cybersecurity attacks to the banking system ',
        technical: 'The dataset was loaded from a CSV file containing transactional and user-level financial data. Initial exploration included summary statistics, missing value checks, and duplicate detection. Null values: 0 (none found)Duplicates: Removed from the dataset.Unnecessary columns (Transaction_ID, User_ID) were excluded to retain only relevant numeric and categorical features.The target variable, Fraud_Label, was converted into a factor for classification tasks. Descriptive and visual analyses were performed to understand the relationships between features and fraud occurrences:Histograms visualized distributions of features like transaction amount, failed transactions, risk score, and card age. Barplots and boxplots showed the relationship between fraud and key predictors, such as weekend transactions, risk score, and failed transaction counts. Correlation analysis and heatmaps identified relationships among numeric features. Strong correlations (|r| > 0.5) were highlighted using corrplot. No extreme multicollinearity was observed, indicating features carried distinct information useful for modeling. The data was split into training (80%) and testing (20%) subsets. All numerical features were standardized using z-score normalization to ensure consistent scaling across features Separate scaling parameters (mean and SD) were applied from training to test data to prevent data leakage. Linear Kernel Radial Basis Function (RBF) Kernel. Both models were fitted on the scaled training data with gamma = 0.3.Decision boundaries were visualized using Failed_Transaction_Count_7d and Risk_Score as feature axes. K-Nearest Neighbors (KNN) A KNN classifier was built using the class package:Initial model: k = 5 Further tuning: Accuracy tested for k = 1–20 to find the optimal number of neighbors. Each iteration involved resampling and scaling, with the highest-performing k value selected as the final configuration.',
        results: 'The SVM results showed that the radial kernel outperformed the linear version, achieving higher classification accuracy and better handling of nonlinear fraud patterns. This demonstrated that fraudulent transactions often have more complex relationships between features, which nonlinear models can capture more effectively. The KNN model was then implemented as an alternative approach. Initially, the number of neighbors (k) was set to 5, producing competitive accuracy results. To further refine performance, the value of k was tuned iteratively from 1 to 20. Each iteration involved retraining and testing the model while recording its accuracy. The results revealed that mid-range k values provided the best balance between model stability and accuracy, reaching approximately 80–90% classification accuracy depending on the data split.',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Student GPA Prediction' as ProjectID,
      title: 'Student GPA Prediction',
      category: 'datascience',
      categoryLabel: 'Machine Learning',
      tagline: 'A data-driven study analyzing how college students\' sleep habits influence academic performance using regression and neural network models to predict GPA and identify key sleep-related predictors of success.',
      techStack: ['R', 'TidyVerse', 'Data Visualization', 'Data Engineering'],
      github: 'https://github.com/LemurTech22/Math_4322_Project',
      demo: '/pages/project',
      details: {
        overview: 'This project explores the relationship between sleep behaviors and academic performance using the CMU Sleep Dataset, which contains detailed records of students’ sleep habits, demographics, and academic metrics such as cumulative and term GPA. The primary objective was to build predictive models that estimate a student’s term GPA based on sleep patterns, prior academic performance, and demographic characteristics. The analysis was carried out in R, with multiple modeling approaches—linear regression, polynomial regression, stepwise regression, generalized linear models (GLMs), and neural networks—used to compare predictive performance and interpret the influence of key variables.',
        challenge: 'Expores sleep behaviors and academic performance.',
        technical: 'The workflow began with loading and preparing the dataset. After reading in the CSV file, summary statistics were generated for term_gpa to understand the overall performance distribution before modeling. The data was split into training (80%) and testing (20%) sets across ten iterations to ensure robustness and reduce sampling bias. Categorical variables, such as demo_race, were converted into factors to allow the models to interpret them correctly. Irrelevant identifiers like cohort and subject_id were removed to prevent noise in the analysis. Missing values were handled using na.omit() to ensure complete data for model fitting. An initial exploratory analysis examined correlations among numeric variables such as total sleep time, cumulative GPA, daytime sleep, and other behavioral metrics. The correlation matrix revealed that cum_gpa had a strong positive relationship with term_gpa, indicating that past academic performance was a major predictor of current-term success. Moderate relationships were also observed between TotalSleepTime, daytime_sleep, and term_gpa, suggesting that better sleep consistency may be associated with improved grades. Scatterplot matrices were used to visualize these relationships and identify any potential nonlinear patterns worth modeling. The first predictive model built was a multiple linear regression, which used all available predictors to estimate term_gpa. This baseline model achieved a reasonable fit, but the Mean Squared Error (MSE) for both training and testing sets indicated room for improvement, especially on unseen data. Next, a polynomial regression model was developed to capture possible nonlinear effects of continuous variables like daytime sleep and cumulative GPA. The polynomial model demonstrated a reduction in test MSE compared to the baseline, confirming that nonlinear relationships between sleep variables and academic performance improved predictive accuracy. To further refine the model, stepwise regression was applied to automatically select the most significant predictors using a combination of forward and backward selection based on AIC (Akaike Information Criterion). This approach reduced model complexity while retaining key variables that had the strongest explanatory power. The resulting stepwise model achieved lower MSE values on both training and testing sets, highlighting that eliminating weaker predictors enhanced generalization. A reduced GLM model was also constructed using only TotalSleepTime and cum_gpa, since these variables consistently showed strong significance across prior models. Repeated testing across ten iterations confirmed the stability of this reduced model, with an average test MSE demonstrating consistent predictive performance.',
        results: 'To validate model robustness, k-fold cross-validation was performed using the boot package. Several models—including the polynomial, full GLM, simpler GLM, and reduced models—were cross-validated to compare generalization error. The cross-validation results supported the earlier findings: the reduced and polynomial GLM models offered the best balance between accuracy and simplicity. The delta values from the cross-validation confirmed that overfitting was minimal and that the reduced models generalized well to unseen data. The final stage of the project extended the analysis using a neural network model built with the neuralnet library. Before training, the dataset was normalized to ensure all continuous variables were on comparable scales. The neural network architecture consisted of one hidden layer with five neurons and used TotalSleepTime, daytime_sleep, cum_gpa, and demo_gender as input features to predict term_gpa. The model was trained and evaluated ten times using different random splits of the data, with mean absolute error (MAE) and mean squared error (MSE) recorded for each iteration. On average, the neural network achieved a low mean test MAE and MSE, indicating that it effectively captured complex, nonlinear relationships between sleep patterns and academic outcomes.',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    },
    {
      id: 'Library' as ProjectID,
      title: 'Library Management System',
      category: 'fullstack',
      categoryLabel: 'Full Stack',
      tagline: 'A comprehensive library management system that enables students, faculty, and admins to borrow, track, and manage diverse items with unique IDs, borrowing limits, durations, fines, and hold requests through a unified web application.',
      techStack: ['React', 'TailwindCSS','Node.js', 'MySQL'],
     // image: '🧠',
      github: 'https://github.com/nikkobaez/library-server/tree/nikko',
      demo: '/pages/project',
      details: {
        overview: 'This project centers on the development of a Library Database Application designed to manage a wide range of library operations—covering book and media inventory, user accounts, borrowing activity, and fine tracking. The system supports multiple item types, including books, devices, and various media formats such as movies, albums, and discs. Each item can be added, modified, or removed from the database, ensuring that library administrators maintain accurate and up-to-date records of all available materials. The database structure allows for efficient storage and retrieval of information, supporting both daily transactions and long-term reporting.',
        challenge: 'Design a Library Management System that allows book and media inventory, user management, rentals, and tracking.',
        technical: 'The application defines three main user roles—Admin, Student, and Faculty—each with distinct permissions and responsibilities. The Admin role oversees the entire system, with full access to create, view, update, and delete user and item records. Admins are also responsible for managing fines, approving item transactions, and generating financial reports. Students and Faculty members serve as standard users who can borrow and return items while being accountable for any late or damaged materials. They also have the ability to pay outstanding fines through the system. This role-based design ensures proper access control and operational integrity within the database environment. A key feature of the project is its use of semantic constraints and database triggers to automate fine management and maintain data consistency. The first trigger activates after a late or damaged item is processed, automatically updating the user’s outstanding balance by adding any associated fees to their total. This guarantees real-time accuracy in tracking penalties and user balances. The second trigger executes after a payment is made, deducting the paid amount from the user’s outstanding fees and simultaneously recording the transaction in the earnings table. This dual mechanism maintains both the user’s balance and the library’s revenue log, ensuring a transparent and traceable financial workflow. Together, these triggers enforce semantic integrity by keeping the displayed fee data synchronized with the underlying transactionsThe database supports a variety of queries and reports that allow users and administrators to interact with and analyze system data efficiently. Standard queries are used to retrieve complete lists of users, items, or transactions, while parameterized queries enable precise lookups—such as finding a specific user by username, checking borrowed items for a given user, or displaying current fines. The system also allows insertion, deletion, and updating of records across all major tables, supporting operations like adding new users, registering newly available items, or updating user profiles.In addition to transactional queries, the system provides several reporting features that summarize library operations and financial performance. Reports can be generated to show total revenue by user, total revenue by item, or aggregate revenue across all users and items. These reports are powered by the earnings table, which captures all payment transactions initiated by users. This capability allows administrators to monitor trends in fines, evaluate item popularity based on associated fees, and generate revenue insights for institutional review.',
        results: 'Library Database Application integrates robust data management, automated financial tracking, and flexible reporting within a cohesive relational design. By combining user role permissions, real-time fee synchronization through triggers, and a comprehensive set of data queries and reports, the system provides a reliable platform for managing all aspects of library operations. It not only streamlines daily administrative tasks but also enhances transparency and accountability in handling library resources and user interactions.',
        learned: 'Key takeaways and lessons learned from this project...'
      }
    }
  ];