pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 3030:3030 -u root:root'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
              sh 'npm ci'
              sh 'npm start & sleep 1'
            }
        }
        stage('Test') {
          steps {
              sh 'npm test'
          }
        }
    }
}
