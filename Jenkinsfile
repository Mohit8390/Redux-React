pipeline {
    agent any
    stages {
        storage('build'){
            steps{
        echo "Welcome to build stage"
            }
        }
    }

    stage('test'){
        steps{
        echo "This phase is test stage"
        }
    }

    stage('Deploy'){
        steps {
        echo "Deploy the code"
        }
    }
}