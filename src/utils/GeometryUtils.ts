import Vector3 from "../math/Vector3";

export function createPlane( u, v, w, udir, vdir, width, height, depth, gridX, gridY, geometry ) {
    const segmentWidth = width / gridX;
    const segmentHeight = height / gridY;

    const widthHalf = width / 2;
    const heightHalf = height / 2;
    const depthHalf = depth / 2;

    const gridX1 = gridX + 1;
    const gridY1 = gridY + 1;

    let vertexCounter = 0;
    let groupCount = 0;

    const vector = new Vector3();

    // generate vertices, normals and uvs

    for ( let iy = 0; iy < gridY1; iy ++ ) {

        const y = iy * segmentHeight - heightHalf;

        for ( let ix = 0; ix < gridX1; ix ++ ) {

            const x = ix * segmentWidth - widthHalf;

            // set values to correct vector component

            vector[ u ] = x * udir;
            vector[ v ] = y * vdir;
            vector[ w ] = depthHalf;

            // now apply vector to vertex buffer

            geometry.vertices.push( vector.x, vector.y, vector.z );

            // set values to correct vector component

            vector[ u ] = 0;
            vector[ v ] = 0;
            vector[ w ] = depth > 0 ? 1 : - 1;

            // now apply vector to normal buffer

            geometry.normals.push( vector.x, vector.y, vector.z );

            // uvs

            geometry.uvs.push( ix / gridX );
            geometry.uvs.push( 1 - ( iy / gridY ) );

            // counters

            vertexCounter += 1;

        }

    }
			// indices

			// 1. you need three indices to draw a single face
			// 2. a single segment consists of two faces
			// 3. so we need to generate six (2*3) indices per segment

			for ( let iy = 0; iy < gridY; iy ++ ) {

				for ( let ix = 0; ix < gridX; ix ++ ) {
					const a = geometry.numberOfVertices + ix + gridX1 * iy;
					const b = geometry.numberOfVertices + ix + gridX1 * ( iy + 1 );
					const c = geometry.numberOfVertices + ( ix + 1 ) + gridX1 * ( iy + 1 );
					const d = geometry.numberOfVertices + ( ix + 1 ) + gridX1 * iy;

					// faces
					geometry.indices.push( a, b, d );
					geometry.indices.push( b, c, d );

				}

			}
}

export function createSphere( radius = 1, widthSegments = 32, heightSegments = 16, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI ){
        const thetaEnd = Math.min( thetaStart + thetaLength, Math.PI );

        let index = 0;
        const grid = [];
        const vertex = new Vector3();
		const normal = new Vector3();
        		// buffers

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];
    		// generate vertices, normals and uvs
		for ( let iy = 0; iy <= heightSegments; iy ++ ) {
			const verticesRow = [];

			const v = iy / heightSegments;

			// special case for the poles

			let uOffset = 0;

			if ( iy == 0 && thetaStart == 0 ) {

				uOffset = 0.5 / widthSegments;

			} else if ( iy == heightSegments && thetaEnd == Math.PI ) {

				uOffset = - 0.5 / widthSegments;

			}

			for ( let ix = 0; ix <= widthSegments; ix ++ ) {

				const u = ix / widthSegments;

				// vertex

				vertex.x = - radius * Math.cos( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );
				vertex.y = radius * Math.cos( thetaStart + v * thetaLength );
				vertex.z = radius * Math.sin( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );

				vertices.push( vertex.x, vertex.y, vertex.z );

				// normal
                // Vector3.
				normal.clone( vertex )
                Vector3.normalize(normal,normal);
				normals.push( normal.x, normal.y, normal.z );

				// uv

				uvs.push( u + uOffset, 1 - v );

				verticesRow.push( index ++ );

			}

			grid.push( verticesRow );

		}

		// indices

		for ( let iy = 0; iy < heightSegments; iy ++ ) {

			for ( let ix = 0; ix < widthSegments; ix ++ ) {

				const a = grid[ iy ][ ix + 1 ];
				const b = grid[ iy ][ ix ];
				const c = grid[ iy + 1 ][ ix ];
				const d = grid[ iy + 1 ][ ix + 1 ];

				if ( iy !== 0 || thetaStart > 0 ) indices.push( a, b, d );
				if ( iy !== heightSegments - 1 || thetaEnd < Math.PI ) indices.push( b, c, d );

			}

		}
     return {
        vertices,
        indices,
        normals,
        uvs
     }
}