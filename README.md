To set up the project, follow these steps:

1. Start by cloning the repository to your local machine.
2. Once the repository is cloned, navigate to the project's root directory.
3. Install the dependencies for each component separately. Run the following commands in separate terminal windows:
   - For the common package: `cd packages/common && yarn`
   - For the web package: `cd packages/web && yarn`
   - For the mobile package: `cd packages/mobile && yarn`
   - For the main ooredoo-case project: `yarn`
4. After the dependencies are installed, you can start the development servers for the web and mobile packages:
   - For the web package: `cd packages/web && yarn start`
   - For the mobile package: `cd packages/mobile && yarn start`
5. If you make any changes to the common package and want to reflect those changes in the web and mobile packages, navigate to the common package directory:
   - `cd packages/common`
   - Run the command `yarn commonbuild`.
   
These steps will help you set up the project and start the development servers for the web and mobile components.