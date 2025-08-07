const domain = import.meta.env.VITE_BACKEND_DOMAIN;

export const backendUrl = {
    signUp: {
        name: 'signUp',
        url: `${domain}/api/signup`,
        method: 'POST'
    },
    signIn: {
        name: 'signIn',
        url: '/api/signin',
        method: 'POST'
    },
    signOut: {
        name: 'signOut',
        url: '/api/signout',
        method: 'POST'
    },
    getUser: {
        name: 'getUser',
        url: '/api/user',
        method: 'GET'
    },
    updateUser: {
        name: 'updateUser',
        url: '/api/user/update',
        method: 'PUT'
    },
    deleteUser: {
        name: 'deleteUser',
        url: '/api/user/delete',
        method: 'DELETE'
    },
    resetPassword: {
        name: 'resetPassword',
        url: '/api/user/reset-password',
        method: 'POST'
    },
    changePassword: {
        name: 'changePassword',
        url: '/api/user/change-password',
        method: 'PUT'
    },
    verifyEmail: {
        name: 'verifyEmail',
        url: '/api/user/verify-email',
        method: 'POST'
    },
    resendVerificationEmail: {
        name: 'resendVerificationEmail',
        url: '/api/user/resend-verification-email',
        method: 'POST'
    },
    requestPasswordReset: {
        name: 'requestPasswordReset',
        url: '/api/user/request-password-reset',
        method: 'POST'
    },
    confirmPasswordReset: {
        name: 'confirmPasswordReset',
        url: '/api/user/confirm-password-reset',
        method: 'POST'
    },
    getUserProfile: {
        name: 'getUserProfile',
        url: '/api/user/profile',
        method: 'GET'
    },
    updateUserProfile: {
        name: 'updateUserProfile',
        url: '/api/user/profile/update',
        method: 'PUT'
    },
    deleteUserProfile: {
        name: 'deleteUserProfile',
        url: '/api/user/profile/delete',
        method: 'DELETE'
    }
};