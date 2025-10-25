/**
 * 3D Models Extension for Speed Verse
 * Adds Lightning McQueen vehicles and Pokemon scenery using GLB/GLTF format
 *
 * This file extends the existing game without modifying minified code.
 */

(function() {
    'use strict';

    console.log('[Models Extension] Loading GLTFLoader and new vehicles...');

    // Import THREE from global scope (already loaded by main app)
    const THREE = window.THREE;

    if (!THREE) {
        console.error('[Models Extension] THREE.js not found! Make sure main app loaded first.');
        return;
    }

    // ============================================================================
    // GLTF LOADER SETUP
    // ============================================================================

    // GLTFLoader is loaded from CDN in index.html
    // Check if it's available
    if (!THREE.GLTFLoader) {
        console.error('[Models Extension] GLTFLoader not found! Check if CDN loaded correctly.');
        console.error('[Models Extension] Expected: https://cdn.jsdelivr.net/npm/three@0.150.0/examples/js/loaders/GLTFLoader.js');
        return;
    }

    console.log('[Models Extension] GLTFLoader available from THREE.js');

    // ============================================================================
    // LIGHTNING MCQUEEN VEHICLE CONFIGURATIONS
    // ============================================================================

    const mcQueenBasePath = './static/media/';

    const lightningMcQueenVehicles = {
        McQueenCars4: {
            enabled: true,
            name: "Lightning McQueen (Cars 4)",
            glbFile: mcQueenBasePath + 'mcqueen_cars4.glb',
            icon: './static/media/veh_car.9991c48a.svg', // Reuse car icon
            audio: {
                roll: './static/media/rolling_06.84342ca7.mp3',
                engine: './static/media/veh_accel_06.8478c426.mp3'
            },
            wheels: {
                tyreWidth: 0.1,
                width: 1.4,
                length: 2.8,
                radius: 0.35,
                circumference: 2.2,
                travel: 0.07,
            },
            skins: { basic: { body: 0xff0000 } }, // Red color
            metrics: {
                shadowMapSize: 4,
                steerSpeed: 1.8,
                accel: 12,
                reverse: 6,
                jerk: 50,
                brake: 10,
                mass: 650,
                steerAccel: 15,
                maxSteer: 0.7,
                axleHeight: 0.35,
                dampening: 0.035,
                rockFactor: 3,
                drag: 0.0008,
                topSpeed: 55,
                rollResistance: 0.05,
                steerInterval: 0.9,
                slipBase: 0.08,
                slipMod: 0.04,
                aeroFactor: 0.45,
                headlightPos: { x: 0.6, y: 0.65, z: 3.0 },
            },
            scale: 1.0, // Adjust after testing
        },

        McQueenRadiatorSprings: {
            enabled: true,
            name: "Lightning McQueen (Radiator Springs)",
            glbFile: mcQueenBasePath + 'mcqueen_radiator_springs.glb',
            icon: './static/media/veh_car.9991c48a.svg',
            audio: {
                roll: './static/media/rolling_06.84342ca7.mp3',
                engine: './static/media/veh_accel_06.8478c426.mp3'
            },
            wheels: {
                tyreWidth: 0.1,
                width: 1.4,
                length: 2.8,
                radius: 0.35,
                circumference: 2.2,
                travel: 0.07,
            },
            skins: { basic: { body: 0xff0000 } },
            metrics: {
                shadowMapSize: 4,
                steerSpeed: 1.8,
                accel: 12,
                reverse: 6,
                jerk: 50,
                brake: 10,
                mass: 650,
                steerAccel: 15,
                maxSteer: 0.7,
                axleHeight: 0.35,
                dampening: 0.035,
                rockFactor: 3,
                drag: 0.0008,
                topSpeed: 55,
                rollResistance: 0.05,
                steerInterval: 0.9,
                slipBase: 0.08,
                slipMod: 0.04,
                aeroFactor: 0.45,
                headlightPos: { x: 0.6, y: 0.65, z: 3.0 },
            },
            scale: 1.0,
        },

        McQueenClassic: {
            enabled: true,
            name: "Lightning McQueen (Classic)",
            glbFile: mcQueenBasePath + 'mcqueen_classic.glb',
            icon: './static/media/veh_car.9991c48a.svg',
            audio: {
                roll: './static/media/rolling_06.84342ca7.mp3',
                engine: './static/media/veh_accel_06.8478c426.mp3'
            },
            wheels: {
                tyreWidth: 0.1,
                width: 1.4,
                length: 2.8,
                radius: 0.35,
                circumference: 2.2,
                travel: 0.07,
            },
            skins: { basic: { body: 0xff0000 } },
            metrics: {
                shadowMapSize: 4,
                steerSpeed: 1.8,
                accel: 12,
                reverse: 6,
                jerk: 50,
                brake: 10,
                mass: 650,
                steerAccel: 15,
                maxSteer: 0.7,
                axleHeight: 0.35,
                dampening: 0.035,
                rockFactor: 3,
                drag: 0.0008,
                topSpeed: 55,
                rollResistance: 0.05,
                steerInterval: 0.9,
                slipBase: 0.08,
                slipMod: 0.04,
                aeroFactor: 0.45,
                headlightPos: { x: 0.6, y: 0.65, z: 3.0 },
            },
            scale: 1.0,
        }
    };

    // ============================================================================
    // POKEMON MODEL CONFIGURATIONS
    // ============================================================================

    const pokemonBasePath = './static/media/pokemon/';

    const pokemonModels = [
        { name: 'Pikachu', file: 'pikachu.glb', scale: 1.0, distance: [5, 10], size: 'small' },
        { name: 'Charizard', file: 'charizard.glb', scale: 1.5, distance: [15, 25], size: 'large', flying: true, height: 2 },
        { name: 'Bulbasaur', file: 'bulbasaur.glb', scale: 1.2, distance: [6, 12], size: 'medium' },
        { name: 'Squirtle', file: 'squirtle.glb', scale: 1.2, distance: [6, 12], size: 'medium' },
        { name: 'Snorlax', file: 'snorlax.glb', scale: 2.0, distance: [15, 25], size: 'large' },
        { name: 'Eevee', file: 'eevee.glb', scale: 1.0, distance: [5, 10], size: 'small' },
        { name: 'Cyndaquil', file: 'cyndaquil.glb', scale: 1.0, distance: [5, 10], size: 'small' },
        { name: 'Mudkip', file: 'mudkip.glb', scale: 1.0, distance: [5, 10], size: 'small' },
        { name: 'Lucario', file: 'lucario.glb', scale: 1.2, distance: [6, 12], size: 'medium' },
        { name: 'Oshawott', file: 'oshawott.glb', scale: 1.0, distance: [5, 10], size: 'small' },
        { name: 'Greninja', file: 'greninja.glb', scale: 1.2, distance: [6, 12], size: 'medium' },
        { name: 'Mimikyu', file: 'mimikyu.glb', scale: 1.0, distance: [5, 10], size: 'small' }
    ];

    // ============================================================================
    // VEHICLE LOADER EXTENSION
    // ============================================================================

    class VehicleLoaderExtension {
        constructor() {
            this.gltfLoader = new THREE.GLTFLoader();
            this.gltfLoader.setPath('');
            this.loadedModels = new Map();
        }

        loadGLBVehicle(vehicleConfig, onLoad, onError) {
            console.log(`[Models Extension] Loading GLB vehicle: ${vehicleConfig.name}`);

            this.gltfLoader.load(
                vehicleConfig.glbFile,
                (gltf) => {
                    const model = gltf.scene;

                    // Apply scale
                    if (vehicleConfig.scale) {
                        model.scale.set(vehicleConfig.scale, vehicleConfig.scale, vehicleConfig.scale);
                    }

                    // Store loaded model
                    this.loadedModels.set(vehicleConfig.name, model);

                    console.log(`[Models Extension] Successfully loaded: ${vehicleConfig.name}`);
                    onLoad(model);
                },
                (progress) => {
                    const percent = (progress.loaded / progress.total * 100).toFixed(2);
                    console.log(`[Models Extension] Loading ${vehicleConfig.name}: ${percent}%`);
                },
                (error) => {
                    console.error(`[Models Extension] Error loading ${vehicleConfig.name}:`, error);
                    if (onError) onError(error);
                }
            );
        }

        getLoadedModel(vehicleName) {
            return this.loadedModels.get(vehicleName);
        }
    }

    // ============================================================================
    // POKEMON SCENERY SYSTEM
    // ============================================================================

    class PokemonScenerySystem {
        constructor(scene) {
            this.scene = scene;
            this.gltfLoader = new THREE.GLTFLoader();
            this.loadedPokemon = new Map();
            this.activePokemon = [];
            this.placementInterval = 80; // Place Pokemon every 80 road segments
            this.lastPlacementIndex = 0;
            this.maxActivePokemon = 15; // Max number of Pokemon visible at once
        }

        async init() {
            console.log('[Pokemon Scenery] Initializing Pokemon models...');

            // Load all Pokemon models
            const loadPromises = pokemonModels.map(pokemon => {
                return new Promise((resolve, reject) => {
                    this.gltfLoader.load(
                        pokemonBasePath + pokemon.file,
                        (gltf) => {
                            this.loadedPokemon.set(pokemon.name, {
                                model: gltf.scene,
                                config: pokemon
                            });
                            console.log(`[Pokemon Scenery] Loaded: ${pokemon.name}`);
                            resolve();
                        },
                        undefined,
                        (error) => {
                            console.warn(`[Pokemon Scenery] Failed to load ${pokemon.name}:`, error);
                            resolve(); // Don't fail if one Pokemon fails
                        }
                    );
                });
            });

            await Promise.all(loadPromises);
            console.log(`[Pokemon Scenery] Loaded ${this.loadedPokemon.size} Pokemon models`);
        }

        update(vehicleIndex, roadPosition) {
            // Check if we should place a new Pokemon
            if (vehicleIndex - this.lastPlacementIndex >= this.placementInterval) {
                this.placePokemon(vehicleIndex, roadPosition);
                this.lastPlacementIndex = vehicleIndex;
            }

            // Remove Pokemon that are behind the player
            this.activePokemon = this.activePokemon.filter(pokemon => {
                if (vehicleIndex > pokemon.retireIndex) {
                    this.scene.remove(pokemon.mesh);
                    return false;
                }
                return true;
            });
        }

        placePokemon(vehicleIndex, roadPosition) {
            if (this.loadedPokemon.size === 0) return;
            if (this.activePokemon.length >= this.maxActivePokemon) return;

            // Random Pokemon selection
            const pokemonArray = Array.from(this.loadedPokemon.values());
            const randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

            // Clone the model
            const pokemonMesh = randomPokemon.model.clone();
            const config = randomPokemon.config;

            // Apply scale
            pokemonMesh.scale.set(config.scale, config.scale, config.scale);

            // Random side (left or right)
            const side = Math.random() > 0.5 ? 1 : -1;

            // Random distance from road edge
            const distanceRange = config.distance;
            const distance = distanceRange[0] + Math.random() * (distanceRange[1] - distanceRange[0]);

            // Position
            const xPos = side * distance;
            const yPos = config.flying ? config.height : 0;
            const zPos = roadPosition.z + (vehicleIndex + 100) * 2; // Place ahead of player

            pokemonMesh.position.set(xPos, yPos, zPos);

            // Rotation - face toward road
            pokemonMesh.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;

            // Add to scene
            this.scene.add(pokemonMesh);

            // Track for cleanup
            this.activePokemon.push({
                mesh: pokemonMesh,
                retireIndex: vehicleIndex + 200 // Remove after 200 segments
            });

            console.log(`[Pokemon Scenery] Placed ${config.name} at x=${xPos.toFixed(1)}, z=${zPos.toFixed(1)}`);
        }
    }

    // ============================================================================
    // INITIALIZATION
    // ============================================================================

    // ============================================================================
    // AUTO-REPLACE CAR MODEL
    // ============================================================================

    function autoReplaceCarModel() {
        console.log('[Models Extension] Auto-replacing default car with Lightning McQueen...');

        // Wait for game to initialize
        setTimeout(() => {
            // Find the scene in the game
            const scene = findGameScene();
            if (!scene) {
                console.warn('[Models Extension] Could not find game scene, retrying...');
                setTimeout(autoReplaceCarModel, 1000);
                return;
            }

            console.log('[Models Extension] Found game scene, loading Lightning McQueen...');

            // Load Lightning McQueen GLB
            const gltfLoader = new THREE.GLTFLoader();
            gltfLoader.load(
                './static/media/lightning_mcqueen.glb',
                (gltf) => {
                    console.log('[Models Extension] ✅ Lightning McQueen loaded successfully!');

                    // Find and replace the existing car mesh
                    scene.traverse((child) => {
                        if (child.isMesh && child.parent && child.parent.name) {
                            // Look for vehicle-related objects
                            if (child.parent.name.includes('vehicle') ||
                                child.parent.name.includes('car') ||
                                child.parent.name.includes('roadster')) {

                                console.log('[Models Extension] Found existing car, replacing...');

                                // Clone the new model
                                const newCar = gltf.scene.clone();
                                newCar.scale.set(0.5, 0.5, 0.5); // Adjust scale
                                newCar.position.copy(child.position);
                                newCar.rotation.copy(child.rotation);

                                // Replace in parent
                                child.parent.add(newCar);
                                child.parent.remove(child);

                                console.log('[Models Extension] ✅ Car replaced with Lightning McQueen!');
                            }
                        }
                    });
                },
                (progress) => {
                    const percent = (progress.loaded / progress.total * 100).toFixed(0);
                    console.log(`[Models Extension] Loading car: ${percent}%`);
                },
                (error) => {
                    console.error('[Models Extension] ❌ Failed to load car model:', error);
                }
            );
        }, 2000); // Wait 2 seconds for game to initialize
    }

    function findGameScene() {
        // Try to find the THREE.js scene in the game
        if (window.scene && window.scene.isScene) {
            return window.scene;
        }

        // Look for scene in common patterns
        const possibleScenes = [
            window.gameScene,
            window.mainScene,
            window.app?.scene,
            window.game?.scene
        ];

        for (const s of possibleScenes) {
            if (s && s.isScene) return s;
        }

        return null;
    }

    window.ModelsExtension = {
        vehicleLoader: new VehicleLoaderExtension(),
        lightningMcQueenVehicles: lightningMcQueenVehicles,
        pokemonScenerySystem: null,

        init: function(scene) {
            console.log('[Models Extension] Initializing extension...');

            // Initialize Pokemon scenery
            this.pokemonScenerySystem = new PokemonScenerySystem(scene);
            this.pokemonScenerySystem.init().then(() => {
                console.log('[Models Extension] Pokemon scenery system ready');
            });

            console.log('[Models Extension] Ready! Lightning McQueen vehicles available.');
            console.log('[Models Extension] Available vehicles:', Object.keys(lightningMcQueenVehicles));
        },

        update: function(vehicleIndex, roadPosition) {
            if (this.pokemonScenerySystem) {
                this.pokemonScenerySystem.update(vehicleIndex, roadPosition);
            }
        }
    };

    // AUTO-START: Replace car model when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoReplaceCarModel);
    } else {
        autoReplaceCarModel();
    }

    console.log('[Models Extension] Extension loaded successfully!');
    console.log('[Models Extension] Call ModelsExtension.init(scene) to activate');

})();
