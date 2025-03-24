class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'zh';
        this.translations = {};
        this.initialized = false;
    }

    async init() {
        try {
            // Hard-coded translations for prototype to avoid CORS issues
            this.translations = {
                en: {
                    common: {
                        login: 'Login',
                        logout: 'Logout',
                        username: 'Username',
                        password: 'Password',
                        submit: 'Submit',
                        cancel: 'Cancel',
                        save: 'Save',
                        delete: 'Delete',
                        edit: 'Edit',
                        back: 'Back',
                        next: 'Next',
                        search: 'Search',
                        scan: 'Scan',
                        confirm: 'Confirm',
                        startScan: 'Start Scan',
                        stopScan: 'Stop Scan',
                        profile: 'Profile',
                        version: 'Version 1.0.0',
                        all: 'All',
                        processing: 'Processing',
                        completed: 'Completed',
                        today: 'Today',
                        thisWeek: 'This Week',
                        thisMonth: 'This Month',
                        dateRange: 'Date Range',
                        status: 'Status',
                        location: 'Location',
                        type: 'Type',
                        rememberMe: 'Remember me',
                        forgotPassword: 'Forgot password?',
                        loggingIn: 'Logging in...',
                        settings: 'Settings',
                        account: 'Account',
                        personalInfo: 'Personal Information',
                        changeAvatar: 'Change Avatar',
                        uploadPhoto: 'Upload Photo',
                        takePhoto: 'Take Photo',
                        chooseFromLibrary: 'Choose from Library',
                        name: 'Name',
                        email: 'Email',
                        phone: 'Phone',
                        role: 'Role',
                        department: 'Department',
                        employeeId: 'Employee ID',
                        darkMode: 'Dark Mode',
                        language: 'Language',
                        notifications: 'Notifications',
                        privacySecurity: 'Privacy & Security',
                        updatePassword: 'Update Password',
                        currentPassword: 'Current Password',
                        newPassword: 'New Password',
                        confirmPassword: 'Confirm Password',
                        saveChanges: 'Save Changes',
                        cancelChanges: 'Cancel Changes',
                        operatorStatus: 'Operator Status',
                        online: 'Online',
                        accountNumber: 'ID',
                        location: 'Shenzhen Nanshan Warehouse/Qianhai Branch',
                        level: 'Level',
                        points: 'Points',
                        registrationDate: 'Registration Date',
                        standard: 'Standard',
                        express: 'Express',
                        international: 'International'
                    },
                    nav: {
                        dashboard: 'Dashboard',
                        reception: 'Reception',
                        packaging: 'Packaging',
                        network: 'Network Point'
                    },
                    reception: {
                        scanReception: 'Scan Reception',
                        signedInventory: 'Signed Inventory',
                        memberBinding: 'Member Binding',
                        searchMember: 'Search Member',
                        memberSearchPlaceholder: 'Enter member phone or ID',
                        noMemberFound: 'No member found',
                        scanMemberCard: 'Scan Member Card',
                        startMemberScan: 'Start Scan Member Card',
                        scanMemberInstruction: 'Position the member card QR code in front of the camera',
                        memberInformation: 'Member Information',
                        packageBinding: 'Package Binding',
                        packageId: 'Package ID',
                        packageType: 'Package Type',
                        note: 'Note',
                        bindPackage: 'Bind Package',
                        boundPackages: 'Bound Packages',
                        entryManagement: 'Entry Management',
                        warehouseEntry: 'Warehouse Entry',
                        warehouseExit: 'Warehouse Exit',
                        recentScans: 'Recent Scans'
                    },
                    packaging: {
                        scanPackage: 'Scan Package',
                        scanWeighing: 'Scan Weighing',
                        packageDistribution: 'Package Distribution',
                        shipping: 'Shipping',
                        overseasEntry: 'Overseas Entry',
                        overseasExit: 'Overseas Exit',
                        dispatch: 'Dispatch',
                        scanPrompt: 'Position the package barcode within the frame',
                        packageInfo: 'Package Information',
                        packageId: 'Package ID',
                        packageType: 'Package Type',
                        weight: 'Weight',
                        dimensions: 'Dimensions',
                        destination: 'Destination',
                        confirmWeighing: 'Confirm Weight',
                        enterPackageId: 'Scan or enter package ID',
                        weightUnit: 'kg',
                        dimensionUnit: 'cm',
                        weightConfirmed: 'Weight confirmed successfully',
                        searchPackage: 'Search package',
                        pendingDistribution: 'Pending Distribution',
                        distributedToday: 'Distributed Today',
                        startDistribution: 'Start Distribution',
                        noPackagesFound: 'No packages found',
                        distributionSuccess: 'Distribution completed successfully',
                        verificationSuccess: 'Verification Passed',
                        verificationFailed: 'Verification Failed',
                        verificationWarning: 'Attention Required',
                        successMessage: 'Package information verified, ready for packaging',
                        errorMessage: 'Package verification failed, please check issues below',
                        warningMessage: 'Package requires attention for the following issues',
                        weightDiscrepancy: 'Package weight does not match system records',
                        sizeDiscrepancy: 'Package size exceeds standard dimensions',
                        specialHandling: 'Special handling required, use reinforced packaging',
                        rescan: 'Rescan',
                        packageNow: 'Package Now',
                        overrideAndPackage: 'Override & Package',
                        confirmAndPackage: 'Confirm & Package',
                        packageSuccess: 'Package processed successfully',
                        overrideSuccess: 'Override confirmed, package processed',
                        scanPackagePlaceholder: 'Scan or enter package ID',
                        selectCarrier: 'Select Carrier',
                        shippingLabel: 'Shipping Label',
                        generateLabel: 'Generate Label',
                        labelGenerated: 'Label generated successfully',
                        trackingNumber: 'Tracking Number',
                        carrierRates: 'Carrier Rates',
                        fedex: 'FedEx',
                        dhl: 'DHL',
                        ups: 'UPS',
                        usps: 'USPS'
                    },
                    network: {
                        scanPickup: 'Scan Pickup',
                        scanEntry: 'Scan Entry',
                        scanExit: 'Scan Exit',
                        completed: 'Completed Operations',
                        inStock: 'In-stock Tracking'
                    },
                    messages: {
                        loginSuccess: 'Login successful',
                        loginError: 'Invalid username or password',
                        loginPrompt: 'Please login to continue',
                        scanSuccess: 'Scan successful',
                        scanError: 'Scan failed, please try again',
                        scanPrompt: 'Position the QR code within the frame',
                        saveSuccess: 'Saved successfully',
                        saveError: 'Save failed, please try again',
                        confirmDelete: 'Are you sure you want to delete?',
                        networkError: 'Network error, please try again',
                        languageSwitched: 'Language switched successfully',
                        profileUpdated: 'Profile updated successfully',
                        passwordUpdated: 'Password updated successfully',
                        passwordMismatch: 'Passwords do not match',
                        passwordIncorrect: 'Current password is incorrect',
                        uploadSuccess: 'Upload successful',
                        uploadError: 'Upload failed, please try again',
                        photoTooLarge: 'Photo size exceeds limit',
                        invalidFileFormat: 'Invalid file format'
                    },
                    settings: {
                        title: 'User Settings',
                        profile: 'Profile & Account',
                        appearance: 'Appearance',
                        preferences: 'Preferences',
                        securityPrivacy: 'Security & Privacy',
                        help: 'Help & Support',
                        about: 'About',
                        contactSupport: 'Contact Support',
                        reportIssue: 'Report an Issue',
                        termsOfService: 'Terms of Service',
                        privacyPolicy: 'Privacy Policy'
                    },
                    entry: {
                        title: 'Entry Management',
                        packageId: 'Package ID',
                        packageType: 'Package Type',
                        weight: 'Weight (kg)',
                        dimensions: 'Dimensions (cm)',
                        length: 'Length',
                        width: 'Width',
                        height: 'Height',
                        notes: 'Notes',
                        submit: 'Submit Entry',
                        scanPackage: 'Scan Package',
                        standard: 'Standard',
                        express: 'Express',
                        international: 'International',
                        success: 'Package information submitted'
                    },
                    warehouse: {
                        packageId: 'Package ID',
                        type: 'Type',
                        weight: 'Weight',
                        dimensions: 'Dimensions',
                        storageType: 'Storage Type',
                        normalStorage: 'Normal Storage',
                        coldStorage: 'Cold Storage',
                        valuableStorage: 'Valuable Storage',
                        location: 'Shelf Location',
                        locationHint: 'Example: A12-3 means Area A, Row 12, Level 3',
                        scanLocation: 'Scan Shelf Code',
                        scanLocationPlaceholder: 'Scan or enter shelf code',
                        notes: 'Notes',
                        notesPlaceholder: 'Add storage notes (optional)',
                        submit: 'Confirm Storage',
                        standard: 'Standard',
                        success: 'Package stored successfully',
                        scanPackage: 'Scan Package',
                        scanPackagePlaceholder: 'Scan or enter package ID',
                        currentLocation: 'Current Location',
                        verifyLocation: 'Verify Location',
                        exitNotes: 'Exit Notes',
                        exitNotesPlaceholder: 'Add exit notes (optional)',
                        confirmExit: 'Confirm Exit',
                        exitSuccess: 'Package exited successfully'
                    }
                },
                zh: {
                    common: {
                        login: '登录',
                        logout: '退出',
                        username: '用户名',
                        password: '密码',
                        submit: '提交',
                        cancel: '取消',
                        save: '保存',
                        delete: '删除',
                        edit: '编辑',
                        back: '返回',
                        next: '下一步',
                        search: '搜索',
                        scan: '扫描',
                        confirm: '确认',
                        startScan: '开始扫描',
                        stopScan: '停止扫描',
                        profile: '个人中心',
                        version: '版本 1.0.0',
                        all: '全部',
                        processing: '处理中',
                        completed: '已完成',
                        today: '今天',
                        thisWeek: '本周',
                        thisMonth: '本月',
                        dateRange: '日期范围',
                        status: '状态',
                        location: '位置',
                        type: '类型',
                        rememberMe: '记住我',
                        forgotPassword: '忘记密码?',
                        loggingIn: '登录中...',
                        settings: '设置',
                        account: '账户',
                        personalInfo: '个人信息',
                        changeAvatar: '更换头像',
                        uploadPhoto: '上传照片',
                        takePhoto: '拍照',
                        chooseFromLibrary: '从相册选择',
                        name: '姓名',
                        email: '电子邮箱',
                        phone: '电话',
                        role: '角色',
                        department: '部门',
                        employeeId: '员工编号',
                        darkMode: '深色模式',
                        language: '语言',
                        notifications: '通知',
                        privacySecurity: '隐私与安全',
                        updatePassword: '更新密码',
                        currentPassword: '当前密码',
                        newPassword: '新密码',
                        confirmPassword: '确认密码',
                        saveChanges: '保存更改',
                        cancelChanges: '取消更改',
                        operatorStatus: '操作员状态',
                        online: '在线',
                        accountNumber: '工号',
                        location: '深圳南山仓/前海网点',
                        level: '等级',
                        points: '积分',
                        registrationDate: '注册时间',
                        standard: '标准',
                        express: '快递',
                        international: '国际'
                    },
                    nav: {
                        dashboard: '主页',
                        reception: '签收',
                        packaging: '打包',
                        network: '网点'
                    },
                    reception: {
                        scanReception: '扫描签收',
                        signedInventory: '已签包裹',
                        memberBinding: '会员绑定',
                        searchMember: '搜索会员',
                        memberSearchPlaceholder: '输入会员电话或编号',
                        noMemberFound: '没有找到会员',
                        scanMemberCard: '扫描会员卡',
                        startMemberScan: '开始扫描会员卡',
                        scanMemberInstruction: '将会员卡二维码放置在摄像头前',
                        memberInformation: '会员信息',
                        packageBinding: '包裹绑定',
                        packageId: '包裹编号',
                        packageType: '包裹类型',
                        note: '备注',
                        bindPackage: '绑定包裹',
                        boundPackages: '已绑定包裹',
                        entryManagement: '录入管理',
                        warehouseEntry: '入库',
                        warehouseExit: '出库',
                        recentScans: '最近扫描'
                    },
                    packaging: {
                        scanPackage: '打包校验',
                        scanWeighing: '扫描称重',
                        packageDistribution: '包裹分单',
                        shipping: '发货',
                        overseasEntry: '海外仓入库',
                        overseasExit: '海外仓出库',
                        dispatch: '发货',
                        scanPrompt: '请将包裹条码置于框内',
                        packageInfo: '包裹信息',
                        packageId: '包裹编号',
                        packageType: '包裹类型',
                        weight: '重量',
                        dimensions: '尺寸',
                        destination: '目的地',
                        confirmWeighing: '确认重量',
                        enterPackageId: '扫描或输入包裹编号',
                        weightUnit: '千克',
                        dimensionUnit: '厘米',
                        weightConfirmed: '重量确认成功',
                        searchPackage: '搜索包裹',
                        pendingDistribution: '待分发',
                        distributedToday: '今日已分发',
                        startDistribution: '开始分发',
                        noPackagesFound: '未找到包裹',
                        distributionSuccess: '分发完成',
                        verificationSuccess: '验证通过',
                        verificationFailed: '验证失败',
                        verificationWarning: '需要注意',
                        successMessage: '包裹信息已验证，可以打包',
                        errorMessage: '包裹验证失败，请检查以下问题',
                        warningMessage: '包裹需要注意以下问题',
                        weightDiscrepancy: '包裹重量与系统记录不符',
                        sizeDiscrepancy: '包裹尺寸超出标准尺寸',
                        specialHandling: '需要特殊处理，使用加固包装',
                        rescan: '重新扫描',
                        packageNow: '立即打包',
                        overrideAndPackage: '忽略并打包',
                        confirmAndPackage: '确认并打包',
                        packageSuccess: '包裹处理成功',
                        overrideSuccess: '已确认忽略，包裹已处理',
                        scanPackagePlaceholder: '扫描或输入包裹编号',
                        selectCarrier: '选择承运商',
                        shippingLabel: '运输标签',
                        generateLabel: '生成标签',
                        labelGenerated: '标签生成成功',
                        trackingNumber: '跟踪号码',
                        carrierRates: '承运商费率',
                        fedex: '联邦快递',
                        dhl: 'DHL',
                        ups: 'UPS',
                        usps: '美国邮政服务'
                    },
                    network: {
                        scanPickup: '扫描提取',
                        scanEntry: '扫描入库',
                        scanExit: '扫描出库',
                        completed: '已完成运单',
                        inStock: '在库运单'
                    },
                    messages: {
                        loginSuccess: '登录成功',
                        loginError: '用户名或密码错误',
                        loginPrompt: '请登录以继续',
                        scanSuccess: '扫描成功',
                        scanError: '扫描失败，请重试',
                        scanPrompt: '将二维码放置在框内',
                        saveSuccess: '保存成功',
                        saveError: '保存失败，请重试',
                        confirmDelete: '确认要删除吗？',
                        networkError: '网络错误，请重试',
                        languageSwitched: '语言切换成功',
                        profileUpdated: '个人资料更新成功',
                        passwordUpdated: '密码更新成功',
                        passwordMismatch: '密码不匹配',
                        passwordIncorrect: '当前密码不正确',
                        uploadSuccess: '上传成功',
                        uploadError: '上传失败，请重试',
                        photoTooLarge: '照片大小超出限制',
                        invalidFileFormat: '文件格式无效'
                    },
                    settings: {
                        title: '用户设置',
                        profile: '个人资料与账户',
                        appearance: '外观',
                        preferences: '偏好设置',
                        securityPrivacy: '安全与隐私',
                        help: '帮助与支持',
                        about: '关于',
                        contactSupport: '联系客服',
                        reportIssue: '报告问题',
                        termsOfService: '服务条款',
                        privacyPolicy: '隐私政策'
                    },
                    entry: {
                        title: '录入管理',
                        packageId: '包裹编号',
                        packageType: '包裹类型',
                        weight: '重量 (kg)',
                        dimensions: '尺寸 (cm)',
                        length: '长',
                        width: '宽',
                        height: '高',
                        notes: '备注',
                        submit: '提交录入',
                        scanPackage: '扫描包裹',
                        standard: '标准',
                        express: '快速',
                        international: '国际',
                        success: '包裹信息已录入'
                    },
                    warehouse: {
                        packageId: '包裹编号',
                        type: '类型',
                        weight: '重量',
                        dimensions: '尺寸',
                        storageType: '存储类型',
                        normalStorage: '普通货架',
                        coldStorage: '冷藏区',
                        valuableStorage: '贵重区',
                        location: '货架位置',
                        locationHint: '例如: A12-3 表示A区12排3层',
                        scanLocation: '扫描货架码',
                        scanLocationPlaceholder: '扫描或输入货架码',
                        notes: '备注',
                        notesPlaceholder: '添加存储备注（选填）',
                        submit: '确认入库',
                        standard: '标准',
                        success: '包裹已成功入库',
                        scanPackage: '扫描包裹',
                        scanPackagePlaceholder: '扫描或输入包裹编号',
                        currentLocation: '当前位置',
                        verifyLocation: '验证位置',
                        exitNotes: '出库备注',
                        exitNotesPlaceholder: '添加出库备注（可选）',
                        confirmExit: '确认出库',
                        exitSuccess: '包裹已成功出库'
                    }
                }
            };
            
            this.initialized = true;
            this.updatePageLanguage();
            
            // Setup message listener for cross-frame communication
            window.addEventListener('message', this.handleMessage.bind(this));
        } catch (error) {
            console.error('Failed to load language data:', error);
        }
    }

    handleMessage(event) {
        // Handle incoming messages from parent window
        if (event.data && event.data.action === 'switchLanguage') {
            this.setLanguage(event.data.lang);
            
            // Notify parent that language was changed
            if (window.parent !== window) {
                window.parent.postMessage({
                    action: 'languageChanged',
                    lang: event.data.lang,
                    frameId: window.name
                }, '*');
            }
        }
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            this.updatePageLanguage();
            return true;
        }
        return false;
    }

    t(key) {
        if (!this.initialized) {
            console.warn('i18n not yet initialized when calling t()');
            return key;
        }

        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        if (!value) {
            console.warn(`Translation not found for language: ${this.currentLang}`);
            return key;
        }
        
        for (const k of keys) {
            value = value?.[k];
            if (!value) break;
        }
        
        return value || key;
    }

    updatePageLanguage() {
        if (!this.initialized) return;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
        
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });
        
        // Dispatch a custom event that other components can listen to
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { lang: this.currentLang } 
        }));
    }
}

const i18n = new I18n();
export default i18n; 